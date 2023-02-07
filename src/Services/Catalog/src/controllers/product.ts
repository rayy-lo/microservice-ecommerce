import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { DataObject } from "../types/types";
import { handleize } from "../helpers/handleize";

const prisma = new PrismaClient();

export const getProduct = async (
  req: Request,
  res: Response
): Promise<DataObject> => {
  try {
    const { id } = req.params;

    const product = await prisma.product.findUnique({
      where: {
        handle: id,
      },
    });

    if (!product) {
      return {
        status: 404,
        success: true,
        data: product,
      };
    }

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

    await prisma.product.delete({
      where: {
        handle: id,
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
    const { name, price, imageUrl, description } = req.body;

    const updatedProduct = await prisma.product.update({
      where: { handle: id },
      data: { name, price, imageUrl, description },
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
    const { name, price, imageUrl, description = "" } = req.body;
    const handle = handleize(name);
    const url = `/product/${handle}`;

    const product = await prisma.product.create({
      data: {
        name,
        price,
        imageUrl,
        handle,
        url,
        description,
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
