import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';

const app = express();
const REQUIRED_ENV = ['EMAIL_HOST', 'EMAIL_USER', 'EMAIL_PASS'];

const missing = REQUIRED_ENV.filter((key) => !process.env[key]);
if (missing.length) {
  console.error(`Missing backend environment variables: ${missing.join(', ')}`);
  console.error('Copy backend/.env.example to backend/.env and configure SMTP credentials.');
  process.exit(1);
}

const allowedOrigins = (process.env.FRONTEND_ORIGIN || 'http://localhost:5173,http://localhost:4173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(helmet());
app.use(cors({
  origin(origin, callback) {
    // Allow tools such as curl and same-origin server requests with no Origin.
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('Origin not allowed by CORS'));
  },
}));
app.use(express.json({ limit: '20kb' }));

const demoLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { success: false, message: 'Too many demo requests. Please try again in 15 minutes.' },
});

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT || 587),
  secure: String(process.env.EMAIL_SECURE).toLowerCase() === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const FREE_EMAIL_DOMAINS = new Set([
  'gmail.com', 'yahoo.com', 'yahoo.co.in', 'hotmail.com',
  'outlook.com', 'rediffmail.com', 'icloud.com',
]);

const clean = (value, max = 500) => String(value ?? '').trim().slice(0, max);
const escapeHtml = (value) => clean(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]));

function validateRequest(body = {}) {
  const data = {
    name: clean(body.name, 120),
    company: clean(body.company, 160),
    designation: clean(body.designation, 120),
    email: clean(body.email, 254).toLowerCase(),
    mobile: clean(body.mobile, 40),
    message: clean(body.message, 2000),
    website: clean(body.website, 200), // Honeypot: bots often fill this field.
  };

  const errors = {};
  if (!data.name) errors.name = 'Enter your full name.';
  if (!data.company) errors.company = 'Enter your company name.';
  if (!data.designation) errors.designation = 'Enter your designation.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) {
    errors.email = 'Enter a valid business email address.';
  } else if (FREE_EMAIL_DOMAINS.has(data.email.split('@')[1])) {
    errors.email = 'Please use your company email address.';
  }
  const digits = data.mobile.replace(/[\s()-]/g, '');
  if (!/^(\+?\d{1,3})?\d{10}$/.test(digits)) {
    errors.mobile = 'Enter a valid 10-digit mobile number, with country code if needed.';
  }
  return { data, errors };
}

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

app.post('/api/demo-request', demoLimiter, async (req, res) => {
  const { data, errors } = validateRequest(req.body);

  // Silently accept bot submissions, but don't send email.
  if (data.website) return res.status(200).json({ success: true });

  if (Object.keys(errors).length) {
    return res.status(400).json({ success: false, errors });
  }

  const recipient = process.env.DEMO_TO || process.env.EMAIL_USER;
  const from = process.env.EMAIL_FROM || process.env.EMAIL_USER;
  const safe = Object.fromEntries(Object.entries(data).map(([key, value]) => [key, escapeHtml(value)]));

  const text = [
    'New RxPL demo request',
    '',
    `Name: ${data.name}`,
    `Company: ${data.company}`,
    `Designation: ${data.designation}`,
    `Business email: ${data.email}`,
    `Mobile: ${data.mobile}`,
    '',
    'Message:',
    data.message || '(No message provided)',
  ].join('\n');

  const html = `
    <div style="font-family:Arial,sans-serif;color:#201334;max-width:640px;margin:auto">
      <h2 style="color:#7a35be">New RxPL Demo Request</h2>
      <table cellpadding="10" cellspacing="0" style="border-collapse:collapse;width:100%">
        <tr><th align="left" style="background:#f3edf9">Name</th><td>${safe.name}</td></tr>
        <tr><th align="left" style="background:#f3edf9">Company</th><td>${safe.company}</td></tr>
        <tr><th align="left" style="background:#f3edf9">Designation</th><td>${safe.designation}</td></tr>
        <tr><th align="left" style="background:#f3edf9">Business email</th><td>${safe.email}</td></tr>
        <tr><th align="left" style="background:#f3edf9">Mobile</th><td>${safe.mobile}</td></tr>
        <tr><th align="left" style="background:#f3edf9">Message</th><td>${safe.message || '(No message provided)'}</td></tr>
      </table>
    </div>`;

  try {
    await transporter.sendMail({
      from,
      to: recipient,
      replyTo: data.email,
      subject: `RxPL demo request — ${data.company}`,
      text,
      html,
    });
    return res.status(200).json({ success: true, message: 'Your demo request has been sent.' });
  } catch (error) {
    // Avoid logging request contents or SMTP credentials.
    console.error('Demo email failed:', error?.message || 'Unknown SMTP error');
    return res.status(500).json({ success: false, message: 'We could not send your request right now. Please try again shortly.' });
  }
});

app.use((error, _req, res, _next) => {
  if (error.message === 'Origin not allowed by CORS') {
    return res.status(403).json({ success: false, message: 'Request origin is not allowed.' });
  }
  console.error('Backend error:', error?.message || error);
  return res.status(500).json({ success: false, message: 'Unexpected server error.' });
});

export async function verifyEmailConnection() {
  return transporter.verify();
}

export default app;
