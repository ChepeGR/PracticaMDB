import express from 'express';
import controllerReadingSession from '../controladores/controllerReadingSession';

const router = express.Router();

router.get('/', controllerReadingSession.getAllReadingSession);
router.get('/:id', controllerReadingSession.getReadingSessionById);
router.post('/', controllerReadingSession.createReadingSession);
router.put('/:id', controllerReadingSession.updateReadingSession);
router.delete('/:id', controllerReadingSession.deleteReadingSession);

export default router;