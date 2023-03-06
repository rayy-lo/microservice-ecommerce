import { Request, Response } from "express";
import { redisClient } from "..";
import Cart from "../model/Cart";

const CART_DATA_TTL = 300;

export const getCart = async (req: Request, res: Response) => {
  if (!req.cookies.cartId) {
    const cart = new Cart();
    redisClient.setEx(
      req.app.locals.cartId,
      CART_DATA_TTL,
      JSON.stringify(cart)
    );
    return res.status(200).json(cart);
  }

  try {
    let cartData = await redisClient.get(req.cookies.cartId);
    res.status(200).json(JSON.parse(cartData!));
  } catch (e) {
    console.error(e);
    res.status(500).send("Error fetching cart data");
  }
};

export const postCart = async (req: Request, res: Response) => {
  const { newProducts } = req.app.locals;
  if (!req.cookies.cartId && req.app.locals.cartId) {
    const newCart = new Cart([], newProducts);

    redisClient.setEx(
      req.app.locals.cartId,
      CART_DATA_TTL,
      JSON.stringify(newProducts)
    );
    return res.status(200).json(newCart);
  }

  try {
    const oldCart = await redisClient.get(req.cookies.cartId);
    const parsedOldCart = JSON.parse(oldCart!);
    const newCart = new Cart(parsedOldCart.items, newProducts);

    redisClient.setEx(
      req.cookies.cartId,
      CART_DATA_TTL,
      JSON.stringify(newCart)
    );
    res.status(200).json(newCart);
  } catch (e) {
    console.error(e);
    res.status(500).send("Error adding items to cart");
  }
};
