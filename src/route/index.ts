import * as express from "express";
import ProvinceController from "../controllers/ProvinceController";

const router = express.Router();

router.post("/province", ProvinceController.create);
router.put("/province/:id", ProvinceController.update);
router.delete("/province/:id", ProvinceController.delete);
router.get("/province", ProvinceController.findAll);
router.get("/province/:id", ProvinceController.findOne);

export default router;
