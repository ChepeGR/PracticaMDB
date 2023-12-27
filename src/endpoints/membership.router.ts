import express from 'express';
import controllerMembership from '../controladores/controllerMembership';

const router = express.Router();

router.get('/', controllerMembership.getAllMembership);
router.get('/:id', controllerMembership.getMembershipById);
router.post('/', controllerMembership.createMembership);
router.put('/:id', controllerMembership.updateMembership);
router.delete('/:id', controllerMembership.deleteMembership);

export default router; 