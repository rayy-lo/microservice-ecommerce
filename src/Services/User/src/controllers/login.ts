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
    if (user.length < 1) res.status(401).send("Incorrect Credentials");

    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (isMatch) {
      res.status(200).send("Authentication successful");
    } else {
      res.status(401).send("Incorrect Credentials");
    }
  } else {
    res.status(500).send("Server Error");
  }
};
