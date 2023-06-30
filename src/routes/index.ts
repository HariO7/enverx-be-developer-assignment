import { Router } from "express";
import {
  createPost,
  deletePost,
  getAllposts,
  getSinglePost,
  updatePost,
} from "../controller/index.controller";
import {
  createPostMiddleware,
  updatePostMiddleware,
} from "../middleware/index.middleware";

const router = Router();

router.post("/posts", createPostMiddleware, createPost);
router.get("/posts", getAllposts);
router.get("/posts/:postId", getSinglePost);
router.put("/posts/:postId", updatePostMiddleware, updatePost);
router.delete("/posts/:postId", deletePost);

export default router;
