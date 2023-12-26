import express from 'express';
import controllerCafeteria from '../controladores/controllerCafeteria';

const router = express.Router();

router.get('/', controllerCafeteria.getAllCafeteria);
router.get('/:id', controllerCafeteria.getCafeteriaByName);
router.post('/', controllerCafeteria.createdCafeteria);
router.put('/:id', controllerCafeteria.updateCafeteria);
router.delete('/:id', controllerCafeteria.deleteCafeteria);

export default router;