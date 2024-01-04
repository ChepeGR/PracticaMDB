import express from 'express';
import controllerPromotion from '../controladores/controllerPromotion';

const router = express.Router();

router.get('/', controllerPromotion.getAllPromotion);
router.get('/:id', controllerPromotion.getPromotionById);
router.post('/', controllerPromotion.createPromotion);
router.put('/:id', controllerPromotion.updatePromotion);
router.put('/:id', controllerPromotion.deletePromotion);

export default router;