import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { DataObject } from "../types/types";

const prisma = new PrismaClient();

export const getProduct = async (
  req: Request,
  res: Response
): Promise<DataObject> => {
  try {
    const { id } = req.params;
    const productId = Number(id);

    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    return {
      status: 200,
      success: true,
      data: product,
    };
  } catch (error) {
    return { status: 400, success: false };
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<DataObject> => {
  try {
    const { id } = req.params;
    const productId = Number(id);

    await prisma.product.delete({
      where: {
        id: productId,
      },
    });

    return {
      status: 200,
      success: true,
    };
  } catch (error) {
    return { status: 400, success: false };
  }
};
export const updateProduct = async (
  req: Request,
  res: Response
): Promise<DataObject> => {
  try {
    const { id } = req.params;
    const { name, price, imageUrl } = req.body;
    const productId = Number(id);

    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: { name, price, imageUrl },
    });

    return {
      status: 200,
      success: true,
      data: updatedProduct,
    };
  } catch (error) {
    return { status: 400, success: false };
  }
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<DataObject> => {
  try {
    const { name, price, imageUrl } = req.body;
    const product = await prisma.product.create({
      data: {
        name,
        price,
        imageUrl,
      },
    });

    return {
      status: 200,
      success: true,
      data: product,
    };
  } catch (error) {
    return { status: 400, success: false };
  }
};
