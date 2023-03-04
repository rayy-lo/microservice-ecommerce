import { Request, Response, NextFunction } from "express";
import axios from "axios";

type PostProduct = {
  id: number;
  quantity: number;
};

export const processCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const items = req.body.items || [];
  const productIds = items.map((product: PostProduct) => product.id);
  const { data } = await axios.get(
    `${process.env.CATALOG_API_URL}/api/product/${productIds[0]}`
  );

  items.push(data);

  req.app.locals.items = items;

  next();
};
