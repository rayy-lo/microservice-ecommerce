import { Request, Response } from "express";
import { createConnection } from "../database/config";

export const registerController = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;
  const query =
    "INSERT INTO user (first_name, last_name, email, password_hash) VALUES (:firstName, :lastName, :email, :password)";
  const values = { firstName, lastName, email, password };

  //TODO: Add password hashing

  const connection = await createConnection();
  if (connection) {
    connection
      .execute(query, values)
      .then((result) => {
        res.status(201).send("Registered!");
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("Error creating new user");
      });
  }

  connection?.end();
};
