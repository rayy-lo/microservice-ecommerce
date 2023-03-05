import { Request, Response } from "express";
import { redisClient } from "..";
import { updateCart } from "../helpers/updateCart";

const EMPTY_CART = {
  items: [],
  itemCount: 0,
  totalPrice: 0,
};

const CART_DATA_TTL = 300;

export const getCart = async (req: Request, res: Response) => {
  console.log(req.cookies.cartId);
  if (!req.cookies.cartId) {
    redisClient.setEx(
      req.app.locals.cartId,
      CART_DATA_TTL,
      JSON.stringify(EMPTY_CART)
    );
    return res.status(200).json(EMPTY_CART);
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
  console.log(req.cookies.cartId);
  if (!req.cookies.cartId) {
    const newCart = updateCart(EMPTY_CART, newProducts);
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
    const newCart = updateCart(parsedOldCart, newProducts);

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
