import {Router} from 'express';
import userRoutes from './userRoutes/userRoutes';

const router = Router();

router.use('/users', userRoutes)

export default router;