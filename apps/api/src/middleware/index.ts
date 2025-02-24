import { Request, Response, NextFunction } from 'express';
import cors from 'cors';
export { authenticate } from './auth';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
}

export const corsMiddleware = cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
});

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
}
