import { Router } from 'express';
import { RequestWithUser } from '../middleware/types/auth';

const router = Router();

router.get('/me', (req: RequestWithUser, res) => {
  res.json({ user: req.user });
});

export default router;
