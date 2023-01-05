import { Router } from "express";

import {
  getCart,
  createCart,
  //getCartById,
  deleteCartById,
  //updateCartById,
} from "../controllers/carrito.controller.js";

const router = Router();

router.get("/carrito", getCart);

router.post("/carrito", createCart);

//router.get("/carrito/:id", getCartById);

router.delete("/carrito/:id", deleteCartById);

//router.patch("/carrito/:id", updateCartById);

export default router;