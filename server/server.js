import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { connectDB } from './config/db.js';
import contactRoutes from './routes/contact.js';

const app = express();
app.set('trust proxy', 1);
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json({ limit: '10kb' }));

app.get('/api/health', (_req, res) => res.json({ ok: true }));
app.use('/api/contact', contactRoutes);

app.use((_req, res) => res.status(404).json({ ok: false, errors: [{ message: 'Not found.' }] }));
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ ok: false, errors: [{ message: 'Something went wrong. Please try again.' }] });
});

const port = process.env.PORT || 5000;
connectDB().catch((e) => console.error('DB error:', e.message)).finally(() =>
  app.listen(port, () => console.log(`API running on :${port}`))
);
