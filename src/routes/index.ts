import { Router } from "express";
import { home } from "../controller/index.controller";

const router = Router();

router.get("/home", home);

export default router;
