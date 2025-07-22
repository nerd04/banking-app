import { Router } from "express";
import { withdraw } from "../controllers/transaction.controller.js";

const router = Router();

router.post("/withdraw", withdraw);

export default router;