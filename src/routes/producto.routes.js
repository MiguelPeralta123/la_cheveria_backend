import { Router } from "express";

import {
  getProd,
  createProd,
  getProdById,
  //deleteProdById,
  //updateProdById,
} from "../controllers/producto.controller.js";

const router = Router();

router.get("/producto", getProd);

router.post("/producto", createProd);

router.get("/producto/:id", getProdById);

/*router.delete("/producto/:id", deleteProdById);

router.patch("/producto/:id", updateProdById);*/

export default router;