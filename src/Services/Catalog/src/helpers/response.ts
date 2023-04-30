import { Response } from "express";
import { DataObject } from "../types/types";

export const sendSuccess = (res: Response, data: DataObject) => {
  res.status(data.status).json(data.data);
};

export const sendError = (res: Response, data: DataObject) => {
  const errorResponse = {
    data,
    message: data.message,
  };
  res.status(data.status).json(errorResponse);
};
