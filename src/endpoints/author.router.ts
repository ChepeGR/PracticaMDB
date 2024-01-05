import express from 'express';
import controllerAuthor from '../controladores/controllerAuthor';

const router = express.Router();

router.get('/', controllerAuthor.getAllAuthores);
router.get('/:id', controllerAuthor.getAuthorById);
router.get('/?name=${nombre}', controllerAuthor.getAuthorByName);
router.post('/', controllerAuthor.createAuthor);
router.put('/:id', controllerAuthor.updateAuthor);
router.delete('/:id', controllerAuthor.deleteAuthor);

export default router;
