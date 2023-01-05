import { Router } from "express";

import {
  getTransp,
  createTransp,
  getTranspById,
  deleteTranspById,
  updateTranspById,
} from "../controllers/transporte.controller.js";

const router = Router();

router.get("/transporte", getTransp);

router.post("/transporte", createTransp);

router.get("/transporte/:id", getTranspById);

router.delete("/transporte/:id", deleteTranspById);

router.patch("/transporte/:id", updateTranspById);

export default router;