import express from 'express';
import controllerEmployee from '../controladores/controllerEmployee';

const router = express.Router();

router.get('/', controllerEmployee.getAllEmployees);
router.get('/:id', controllerEmployee.getEmployeesById);
router.post('/', controllerEmployee.createEmployee);
router.put('/:id', controllerEmployee.updateEmployee);
router.put('/:id', controllerEmployee.deleteEmployee);

export default router;