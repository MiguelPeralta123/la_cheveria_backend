import { Router } from "express";

import {
  getTransf,
  createTransf,
  getTransfById,
  deleteTransfById,
  updateTransfById,
} from "../controllers/banco.controller.js";

const router = Router();

router.get("/banco", getTransf);

router.post("/banco", createTransf);

router.get("/banco/:id", getTransfById);

router.delete("/banco/:id", deleteTransfById);

router.patch("/banco/:id", updateTransfById);

export default router;