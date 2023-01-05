import { Router } from "express";

import {
  getVentas,
  createVentas,
  getVentasById,
  deleteVentasById,
  updateVentasById,
} from "../controllers/ventas.controller.js";

const router = Router();

router.get("/ventas", getVentas);

router.post("/ventas", createVentas);

router.get("/ventas/:id", getVentasById);

router.delete("/ventas/:id", deleteVentasById);

router.patch("/ventas/:id", updateVentasById);

export default router;