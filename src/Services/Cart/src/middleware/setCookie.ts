import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";

const COOKIE_OPTIONS = {
  maxAge: 600 * 1000 * 6 * 24, //Expires in 1 day
};

export const setCookie = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.cookies.cartId);
  if (!req.cookies.cartId) {
    const sessionId = uuidv4();
    req.app.locals.cartId = sessionId;
    res.cookie("cartId", sessionId, COOKIE_OPTIONS);
  }
  next();
};
