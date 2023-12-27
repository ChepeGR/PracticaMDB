import express from 'express';
import controllerPerson from "../controladores/controllerPerson";

const router = express.Router();

router.get('/', controllerPerson.getAllPerson);
router.get('/:id', controllerPerson.getPersonByName);
router.post('/', controllerPerson.createPerson);
router.put('/:id', controllerPerson.updatePerson);
router.delete('/:id', controllerPerson.deletePerson);

export default router; 