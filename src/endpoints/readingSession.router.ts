import express from 'express';
import controladorReadingSession from '../controladores/controladorReadingSession';

const router = express.Router();

router.get('/', controladorReadingSession.getAllReadingSession);
router.get('/:id', controladorReadingSession.getReadingSessionById);
router.post('/', controladorReadingSession.createReadingSession);
router.put('/:id', controladorReadingSession.updateReadingSession);
router.delete('/:id', controladorReadingSession.deleteReadingSession);

export default router;