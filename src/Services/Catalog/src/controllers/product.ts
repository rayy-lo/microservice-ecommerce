import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const productId = Number(id);

    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (product === null) {
      res.status(404).json({
        message: "Product Not Found",
      });
    }

    res.status(200).json({
      data: product,
    });
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const productId = Number(id);

    await prisma.product.delete({
      where: {
        id: productId,
      },
    });

    res.setHeader("Location", `/product/${id}`);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
};
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price, imageUrl } = req.body;
    const productId = Number(id);

    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: { name, price, imageUrl },
    });

    res.status(200).json({
      data: updatedProduct,
    });
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
};

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

    res.setHeader("Location", `/product/${product.id}`);
    res.status(201).json({
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};
