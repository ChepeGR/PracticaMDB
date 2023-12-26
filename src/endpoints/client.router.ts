import express from 'express';
import controllerClient from '../controladores/controllerClient';

const router = express.Router();

router.get('/', controllerClient.getAllClients);
router.get('/:id', controllerClient.getClientByName);
router.post('/', controllerClient.createClient);
router.put('/:id', controllerClient.updateClient);
router.delete('/:id', controllerClient.deleteClient);

export default router;