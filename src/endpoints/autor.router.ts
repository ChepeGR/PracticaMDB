import express from 'express';
import controladorAutor from '../controladores/controladorAutor';

const router = express.Router();

router.get('/', controladorAutor.getAllAutores);
router.get('/:id', controladorAutor.getAutorByName);
router.post('/', controladorAutor.createAutor);
router.put('/:id', controladorAutor.updateAutor);
router.delete('/:id', controladorAutor.deleteAutor);

export default router;
