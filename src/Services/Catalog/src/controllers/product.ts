import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProduct = async (req: Request, res: Response) => {};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, imageUrl } = req.body;
    const product = await prisma.product.create({
      data: {
        name,
        price,
        imageUrl,
      },
    });
    return res.json({
      success: true,
      data: product,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error,
    });
  }
};
