import { Router } from "express";

import {
  getEnvios,
  createEnvio,
  getEnvioById,
  deleteEnvioById,
  updateEnvioById,
} from "../controllers/envios.controller.js";

const router = Router();

router.get("/envios", getEnvios);

router.post("/envios", createEnvio);

router.get("/envios/:id", getEnvioById);

router.delete("/envios/:id", deleteEnvioById);

router.patch("/envios/:id", updateEnvioById);

export default router;