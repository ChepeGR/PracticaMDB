import express from 'express';
import controllerMagazine from '../controladores/controllerMagazine';

const router = express.Router();

router.get('/', controllerMagazine.getAllMagazine);
router.get('/:id', controllerMagazine.getMagazineById);
router.post('/', controllerMagazine.createMagazine);
router.put('/:id', controllerMagazine.updateMagazine);
router.put('/:id', controllerMagazine.deleteMagazine);

export default router;