import { Request, Response } from "express";
import { redisClient } from "..";
import { v4 as uuidv4 } from "uuid";

const EMPTY_CART = {
  items: [],
  itemCount: 0,
  totalPrice: 0,
};

const CART_DATA_TTL = 300;
const COOKIE_OPTIONS = {
  maxAge: 300 * 1000,
};

export const getCart = async (req: Request, res: Response) => {
  let cartId = req.cookies.cartId;

  if (!cartId) {
    cartId = uuidv4();
    redisClient.setEx(cartId, CART_DATA_TTL, JSON.stringify(EMPTY_CART));
    res.cookie("cartId", cartId, COOKIE_OPTIONS);
    return res.status(200).json(EMPTY_CART);
  }

  try {
    const cartData = await redisClient.get(cartId);
    res.status(200).json(JSON.parse(cartData!));
  } catch (e) {
    console.error(e);
    res.status(500).send("Error fetching cart data");
  }
};

export const postCart = async (req: Request, res: Response) => {
  let cartId = req.cookies.cartId;
  const { items } = req.app.locals;

  if (!cartId) {
    const updatedCart = { ...EMPTY_CART, items };

    cartId = uuidv4();
    redisClient.setEx(cartId, CART_DATA_TTL, JSON.stringify(updatedCart));
    res.cookie("cartId", cartId, COOKIE_OPTIONS);
    return res.status(200).json(updatedCart);
  }

  try {
    // TODO: Handle logic where product is in items
    // should just change qty

    const cartData = await redisClient.get(cartId);
    const parsedCartData = JSON.parse(cartData!);
    const newItems = [...parsedCartData.items, ...items];
    parsedCartData.items = newItems;

    redisClient.setEx(cartId, CART_DATA_TTL, JSON.stringify(parsedCartData));
    res.status(200).json(parsedCartData);
  } catch (e) {
    console.error(e);
    res.status(500).send("Error adding items to cart");
  }
};
