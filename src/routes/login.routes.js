import { Router } from "express";

import {
  getUser,
  createUser
} from "../controllers/login.controller.js";

const router = Router();

router.get("/login", getUser);

router.post("/login", createUser);

export default router;