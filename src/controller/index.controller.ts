import { Request, Response } from "express";
import Post from "../models/Post";
import mongoose from "mongoose";

export const createPost = (req: Request, res: Response) => {
  const { title, content, author } = req.body;

  const post = new Post({
    _id: new mongoose.Types.ObjectId(),
    title,
    content,
    author,
  });

  return post
    .save()
    .then((post) => {
      res.status(201).json({ post });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
};

export const getAllposts = (req: Request, res: Response) => {
  return Post.find()
    .then((data) => {
      if (data === null) {
        return res.status(404).json({ message: "no data found" });
      }
      return res.status(200).json({ data });
    })
    .catch((err) => {
      res.status(501).json({ err });
    });
};

export const getSinglePost = (req: Request, res: Response) => {
  const postId = req.params.postId;
  return Post.findById(postId)
    .then((data) => {
      if (data === null) {
        return res.status(404).json({ message: "no data found" });
      }
      return res.status(200).json({ data });
    })
    .catch((err) => {
      res.status(501).json({ err });
    });
};

export const updatePost = (req: Request, res: Response) => {
  const postId = req.params.postId;
  return Post.findByIdAndUpdate(postId, { ...req.body })
    .then(() => {
      res.status(200).json({ message: "document updated" });
    })
    .catch((err) => {
      res.status(501).json({ err });
    });
};

export const deletePost = (req: Request, res: Response) => {
  const postId = req.params.postId;
  return Post.findByIdAndDelete(postId)
    .then(() => {
      res.status(200).json({ message: "document deleted" });
    })
    .catch((err) => {
      res.status(501).json({ err });
    });
};
