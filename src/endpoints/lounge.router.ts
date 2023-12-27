import express from "express";
import controllerLounge from "../controladores/controllerLounge";

const router = express.Router();

router.get('/', controllerLounge.getAllLounges);
router.get('/:id', controllerLounge.getLoungeById);
router.post('/', controllerLounge.createLounge);
router.put('/:id', controllerLounge.updateLounge);
router.delete('/:id', controllerLounge.deleteLounge);

export default router;