import { Router } from 'express';
import addPointsRouter from './AddPoints';
import healthRouter from './healthRoute';

const router = Router();

router.use('/add-points', addPointsRouter);
router.use('/health', healthRouter);

export default router;
