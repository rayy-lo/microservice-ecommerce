import { Response } from "express";
import { DataObject } from "../types/types";

export const sendSuccess = (res: Response, data: DataObject) => {
  res.status(200).json(data.data);
};

export const sendError = (res: Response, data: DataObject) => {
  res.status(400).json(data.message);
};
