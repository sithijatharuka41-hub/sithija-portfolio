import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';
import mongoose from 'mongoose';
import Contact from '../models/Contact.js';
import { contactRules, handleValidation } from '../middleware/validate.js';

const router = Router();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, max: 5, standardHeaders: true, legacyHeaders: false,
  message: { ok: false, errors: [{ message: 'Too many messages. Please try again later.' }] },
});

async function sendMail({ name, email, subject, message }) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !MAIL_TO) return;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST, port: Number(SMTP_PORT) || 587, secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
  await transporter.sendMail({
    from: `"Portfolio" <${SMTP_USER}>`, to: MAIL_TO, replyTo: email,
    subject: `[Portfolio] ${subject}`, text: `From: ${name} <${email}>\n\n${message}`,
  });
}

router.post('/', limiter, contactRules, handleValidation, async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;
    if (mongoose.connection.readyState === 1) {
      await Contact.create({ name, email, subject, message, ip: req.ip });
    }
    sendMail({ name, email, subject, message }).catch((e) => console.error('Mail error:', e.message));
    res.status(201).json({ ok: true, message: 'Thanks! Your message has been sent.' });
  } catch (err) { next(err); }
});

export default router;
