import express from "express";
import controladorLounge from "../controladores/controladorLounge";

const router = express.Router();

router.get('/', controladorLounge.getAllLounges);
router.get('/:id', controladorLounge.getLoungeById);
router.post('/', controladorLounge.createLounge);
router.put('/:id', controladorLounge.updateLounge);
router.delete('/:id', controladorLounge.deleteLounge);

export default router;