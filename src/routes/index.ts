import { Router } from "express";
import { createPost, getAllposts } from "../controller/index.controller";

const router = Router();

router.post("/posts", createPost);
router.get("/posts", getAllposts);

export default router;
