import express from 'express';
import controladorCafeteria from '../controladores/controladorCafeteria';

const router = express.Router();

router.get('/', controladorCafeteria.getAllCafeteria);
router.get('/:id', controladorCafeteria.getCafeteriaByName);
router.post('/', controladorCafeteria.createdCafe);
router.put('/:id', controladorCafeteria.updateCafe);
router.delete('/:id', controladorCafeteria.deleteCafe);

export default router;