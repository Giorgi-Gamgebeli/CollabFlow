import express from 'express';
import dotenv from 'dotenv';
import { corsMiddleware, errorHandler, requestLogger, authenticate } from './middleware';
import { RequestWithUser } from './middleware/types/auth';
dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

app.use(corsMiddleware);
app.use(express.json());
app.use(requestLogger);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/protected', authenticate, (req: RequestWithUser, res) => {
  res.json({ message: 'You have access to protected route', user: req.user });
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
