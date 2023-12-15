import express from 'express';
import controladorMembresia from '../controladores/controladorMembresia';

const router = express.Router();

router.get('/', controladorMembresia.getAllMembresias);
router.get('/:id', controladorMembresia.getMembresiaById);
router.post('/', controladorMembresia.createMembresia);
router.put('/:id', controladorMembresia.updateMembresia);
router.delete('/:id', controladorMembresia.deleteMembresia);

export default router;