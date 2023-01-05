import { Router } from "express";

import {
  getPagos,
  createPago,
  getPagoById,
  deletePagoById,
  updatePagoById,
} from "../controllers/pagos.controller.js";

const router = Router();

router.get("/pagos", getPagos);

router.post("/pagos", createPago);

router.get("/pagos/:id", getPagoById);

router.delete("/pagos/:id", deletePagoById);

router.patch("/pagos/:id", updatePagoById);

export default router;