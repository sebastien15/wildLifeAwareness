import {Router} from 'express';
import userRoutes from './userRoutes/userRoutes';
import animalRoutes from './animalRoutes/animalRoutes';

const router = Router();

router.use('/users', userRoutes)
router.use('/animals', animalRoutes)

export default router;