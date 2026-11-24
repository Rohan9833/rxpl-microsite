# RxPL Microsite

## Local development

This project uses two separate processes:

- Frontend: Vite on `http://localhost:5173`
- Backend: Express + Nodemailer on `http://localhost:3001`

The frontend Vite dev server proxies requests beginning with `/api` to the backend.

### 1. Configure the backend email credentials

In PowerShell, from the repository root:

```powershell
Copy-Item backend/.env.example backend/.env
```

Open `backend/.env` and fill in the SMTP password. Keep this file private and never commit it.

Example settings:

```env
EMAIL_FROM="WazzupPAP <edetailer@digilateral.com>"
EMAIL_HOST=smtpout.secureserver.net
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=edetailer@digilateral.com
EMAIL_PASS=YOUR_SMTP_PASSWORD
DEMO_TO=info@digilateral.com
FRONTEND_ORIGIN=http://localhost:5173
PORT=3001
```

If `DEMO_TO` is omitted, demo requests go to `EMAIL_USER`.

### 2. Install backend packages

```powershell
cd backend
npm install
```

### 3. Start the backend

In Terminal 1, from the repository root:

```powershell
cd backend
npm run dev
```

It should print the API port and the SMTP verification status. Health check:

```
http://localhost:3001/api/health
```

Expected response:

```json
{"status":"ok"}
```

### 4. Start the frontend

In Terminal 2:

```powershell
cd frontend
npm install
npm run dev
```

Open the Vite URL, normally `http://localhost:5173`. Submit the Demo form; it will POST to `/api/demo-request`, and Vite forwards that request to port 3001.

## Demo request email

A successful request sends an email containing the form details to `DEMO_TO` (or `EMAIL_USER` if no destination is configured). The sender is `EMAIL_FROM`; the user's email is set as `Reply-To` so you can reply directly.

The API validates the submitted fields, applies a rate limit, and includes a hidden honeypot field to filter simple bots.

## Production deployment

- Build the frontend from `frontend` using `npm run build`; deploy `frontend/dist`.
- Run the backend separately with `npm start` from `backend`, using a process manager such as PM2.
- Set `FRONTEND_ORIGIN` to your production website origin (comma-separated origins are supported).
- Configure your web server to proxy `/api/` to `http://127.0.0.1:3001`.

Example Nginx location:

```nginx
location /api/ {
    proxy_pass http://127.0.0.1:3001/api/;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```
