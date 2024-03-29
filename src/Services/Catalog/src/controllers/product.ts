import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { DataObject } from "../types/types";
import { handleize } from "../utils/handleize";
import { isStringOnlyNumbers } from "../utils/isStringOnlyNumbers";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

const prisma = new PrismaClient();

export const getProduct = async (
  req: Request,
  res: Response
): Promise<DataObject> => {
  try {
    let id: string | number = req.params.id;
    const propertyToFind = isStringOnlyNumbers(id) ? "id" : "handle";
    if (isStringOnlyNumbers(id)) id = parseInt(req.params.id);

    const product = await prisma.product.findUnique({
      where: {
        [propertyToFind]: id,
      },
    });

    if (!product) {
      return {
        status: 404,
        success: false,
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
    let id: string | number = req.params.id;
    const propertyToFind = isStringOnlyNumbers(id) ? "id" : "handle";
    if (isStringOnlyNumbers(id)) id = parseInt(req.params.id);

    await prisma.product.delete({
      where: {
        [propertyToFind]: id,
      },
    });

    return {
      status: 204,
      success: true,
    };
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return { status: 204, success: true };
      }
    }
    return { status: 400, success: false };
  }
};
export const updateProduct = async (
  req: Request,
  res: Response
): Promise<DataObject> => {
  try {
    let id: string | number = req.params.id;
    const propertyToFind = isStringOnlyNumbers(id) ? "id" : "handle";
    if (isStringOnlyNumbers(id)) id = parseInt(req.params.id);

    const { name, price, imageUrl, description } = req.body;

    const updatedProduct = await prisma.product.update({
      where: { [propertyToFind]: id },
      data: { name, price, imageUrl, description },
    });

    return {
      status: 200,
      success: true,
      data: updatedProduct,
    };
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return { status: 404, success: false };
      }
    }
    return { status: 500, success: false };
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
      status: 201,
      success: true,
      data: product,
    };
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return { status: 409, success: false };
      }
    }
    return { status: 500, success: false };
  }
};
