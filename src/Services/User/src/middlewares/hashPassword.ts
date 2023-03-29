import bcrypt from "bcrypt";
import { NextFunction, RequestHandler, Response } from "express";
import { CustomRequest } from "../types/types";

const saltRounds = 10;

export const hashPassword: RequestHandler = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  bcrypt.hash(
    req.body.password,
    saltRounds,
    (err: Error | undefined, hash: string) => {
      if (err) {
        // Stop here and not prevent register
        res.status(500).send("Error registering user");
      } else {
        req.hashedPass = hash;
        next();
      }
    }
  );
};
