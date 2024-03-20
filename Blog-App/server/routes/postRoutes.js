import express from "express";
const router = express.Router();
import {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
} from "../controllers/postController.js";
// createPost
router.post("/:id", createPost);

// getAllPosts
router.get("/", getAllPosts);

// getPostById
router.get("/:id", getPostById);

// updatePostById
router.put("/:id", updatePostById);

// deletePostById
router.delete("/:id", deletePostById);

export default router;
