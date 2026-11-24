import 'dotenv/config';
import app, { verifyEmailConnection } from './app.js';

const PORT = Number(process.env.PORT || 3001);

app.listen(PORT, () => {
  console.log(`RxPL backend listening on http://localhost:${PORT}`);

  verifyEmailConnection()
    .then(() => console.log('SMTP connection verified.'))
    .catch((error) => {
      console.warn('SMTP verification failed; server is running, but email may not send:', error.message);
    });
});
