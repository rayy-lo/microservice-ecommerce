import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";

const COOKIE_OPTIONS = {
  maxAge: 300 * 1000,
};

export const handleCookie = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.cookies.cartId) {
    const sessionId = uuidv4();
    req.app.locals.cartId = sessionId;
    res.cookie("cartId", sessionId, COOKIE_OPTIONS);
  }
  next();
};
