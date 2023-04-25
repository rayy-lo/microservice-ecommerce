import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

const isAuthenticated: RequestHandler = async (req, res, next) => {
  const jwtCookie = req.cookies["jwt"];
  if (jwtCookie) {
    try {
      await jwt.verify(jwtCookie, `${process.env.USER_JWT_SECRET}`);
      next();
    } catch (err) {
      res.status(403).json({
        message: "Invalid Token",
      });
    }
  } else {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
};

export default isAuthenticated;
