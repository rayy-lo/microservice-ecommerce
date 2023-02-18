import { Request, Response } from "express";

export const getCart = (req: Request, res: Response) => {
  res.send("Get Cart route");
};

export const postCart = (req: Request, res: Response) => {
  res.send("Post Cart route");
};
