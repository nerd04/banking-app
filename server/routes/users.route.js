import { Router } from "express";
import {userRegistration} from '../controllers/user.controller.js';

const router = Router();

router.get("/createAccount", userRegistration);

export default router;