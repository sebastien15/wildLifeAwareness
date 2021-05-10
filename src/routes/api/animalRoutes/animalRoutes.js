import {Router} from 'express';
import animalController from '../../../controllers/animalController';

const router = Router();

router.post('/create',animalController.CreateAnimal);
router.get('/',animalController.retrieveAnimal);
router.get('/:id',animalController.findAnimal);
router.patch('/:id',animalController.updateAnimal);
router.delete('/:id',animalController.deleteAnimal);

export default router