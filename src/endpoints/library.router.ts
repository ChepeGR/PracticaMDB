import express from 'express';
import controllerLibrary from '../controladores/controllerLibrary';

const router = express.Router();

router.get('/', controllerLibrary.getAllLibrary);
router.get('/:id', controllerLibrary.getLibraryById);
router.post('/', controllerLibrary.createLibrary);
router.put('/:id', controllerLibrary.updateLibrary);
router.put('/:id', controllerLibrary.deleteLibrary);

export default router;