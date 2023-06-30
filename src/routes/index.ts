import { Router } from "express";
import { createPost } from "../controller/index.controller";

const router = Router();

router.post("/posts", createPost);

export default router;
