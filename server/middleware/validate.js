import { body, validationResult } from 'express-validator';
export const contactRules = [
  body('name').trim().isLength({ min: 2, max: 80 }).withMessage('Name must be 2-80 characters.').escape(),
  body('email').trim().isEmail().withMessage('Enter a valid email.').normalizeEmail(),
  body('subject').trim().isLength({ min: 3, max: 120 }).withMessage('Subject must be 3-120 characters.').escape(),
  body('message').trim().isLength({ min: 10, max: 2000 }).withMessage('Message must be 10-2000 characters.').escape(),
  body('website').isEmpty().withMessage('Spam detected.'), // honeypot
];
export function handleValidation(req, res, next) {
  const result = validationResult(req);
  if (result.isEmpty()) return next();
  res.status(422).json({ ok: false, errors: result.array().map((e) => ({ field: e.path, message: e.msg })) });
}
