import express from 'express';
import controladorPersona from "../controladores/controladorPersona";

const router = express.Router();

router.get('/', controladorPersona.getAllPersonas);
router.get('/:id', controladorPersona.getPersonaByName);
router.post('/', controladorPersona.createPersona);
router.put('/:id', controladorPersona.updatePersona);
router.delete('/:id', controladorPersona.deletePersona);

export default router;