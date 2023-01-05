import { Router } from "express";

import {
  getProv,
  createProv,
  getProvById,
  deleteProvById,
  updateProvById,
} from "../controllers/prov.controller.js";

const router = Router();

router.get("/prov", getProv);

router.post("/prov", createProv);

router.get("/prov/:id", getProvById);

router.delete("/prov/:id", deleteProvById);

router.patch("/prov/:id", updateProvById);

export default router;
