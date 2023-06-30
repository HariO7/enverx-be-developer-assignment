import { NextFunction, Request, Response } from "express";

export const createPostMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: "Missing or empty required fields" });
  }
  const { title, content, author } = req.body;
  if (
    !title ||
    !content ||
    !author ||
    title.trim() === "" ||
    content.trim() === "" ||
    author.trim() === ""
  ) {
    return res.status(400).json({ error: "Missing or empty required fields" });
  }
  next();
};

export const updatePostMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: "Missing or empty required fields" });
  }
  const { title, content, author } = req.body;
  console.log("title", title);

  if (
    (!title || title.trim() === "") &&
    (!content || content.trim() === "") &&
    (!author || author.trim() === "")
  ) {
    return res
      .status(400)
      .json({
        error:
          "At least one of title, content, or author must be provided and not empty",
      });
  }
  next();
};
