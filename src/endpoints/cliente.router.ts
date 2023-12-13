import express from 'express';
import controladorCliente from '../controladores/controladorCliente';

const router = express.Router();

router.get('/', controladorCliente.getAllCliente);
router.get('/:id', controladorCliente.getClienteByName);
router.post('/', controladorCliente.createCliente);
router.put('/:id', controladorCliente.updateCliente);
router.delete('/:id', controladorCliente.deleteCliente);

export default router;