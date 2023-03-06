import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { Product } from "../model/Cart";

type PostProduct = {
  id: number;
  quantity: number;
};

export const getProductData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const items = req.body.items || [];

  //TODO: Handle requests with multiple items
  const productIds = items.map((product: PostProduct) => product.id);

  const { data } = await axios.get(
    `${process.env.CATALOG_API_URL}/api/product/${productIds[0]}`
  );

  const newProducts: Product[] = [];

  if (data) {
    const newData = {
      ...data,
      quantity: items[0].quantity,
    };
    newProducts.push(newData);
  }

  req.app.locals.newProducts = newProducts;

  next();
};
