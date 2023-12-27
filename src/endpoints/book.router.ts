import express from 'express';
import controllerBook from '../controladores/controllerBook';


const router = express.Router();

router.get('/', controllerBook.getAllBooks);
router.get('/:id', controllerBook.getBookById);
router.post('/', controllerBook.createBook);
router.put('/:id', controllerBook.updateBook);
router.delete('/:id', controllerBook.deleteBook);

export default router;