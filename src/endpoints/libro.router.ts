import express from 'express';
import controladorLibro from '../controladores/controladorLibro';


const router = express.Router();

router.get('/', controladorLibro.getAllLibros);
router.get('/:id', controladorLibro.getLibroById);
router.post('/', controladorLibro.createLibro);
router.put('/:id', controladorLibro.updateLibro);
router.delete('/:id', controladorLibro.deleteLibro);

export default router;