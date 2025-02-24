import { Router } from 'express';
import { authenticate } from '../middleware';

const router = Router();

router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

router.use('/user', authenticate, require('./user'));
router.use('/projects', authenticate, require('./projects'));

export default router;
