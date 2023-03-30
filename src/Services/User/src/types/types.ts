import { Request } from "express";
import { RowDataPacket } from "mysql2";

export interface CustomRequest extends Request {
  hashedPass?: string;
}

export interface IUser extends RowDataPacket {
  id: number;
  email: string;
  password_hash: string;
  first_name: string;
  last_name: string;
  created_at: string;
  updated_at: string;
}
