import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { createConnection } from "../database/config";
import { IUser } from "../types/types";

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const connection = await createConnection();
  const query = "SELECT * FROM user WHERE email = :email LIMIT 1";
  const values = { email };

  if (connection) {
    const [[user]] = await connection.execute<IUser[]>(query, values);
    if (!user)
      return res.status(401).json({
        message: "Incorrect Credentials",
      });

    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (isMatch) {
      res.status(200).json({
        message: "Authenticated",
      });
    } else {
      res.status(401).json({
        message: "Incorrect Credentials",
      });
    }
  } else {
    res.status(500).send("Server Error");
  }
};
