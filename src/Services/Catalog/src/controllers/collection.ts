import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { DataObject } from "../types/types";
import { handleize } from "../helpers/handleize";

const prisma = new PrismaClient();

export const getCollection = async (
  req: Request,
  res: Response
): Promise<DataObject> => {
  try {
    const { id } = req.params;
    const collection = await prisma.collection.findUnique({
      where: {
        handle: id,
      },
      include: { products: true },
    });

    return {
      status: 200,
      success: true,
      data: collection,
    };
  } catch (error) {
    return { status: 400, success: false };
  }
};

export const createCollection = async (
  req: Request,
  res: Response
): Promise<DataObject> => {
  try {
    const { name, products, description } = req.body;
    const handle = handleize(name);
    const url = `/collection/${handle}`;

    const collection = await prisma.collection.create({
      data: {
        name,
        handle,
        url,
        products: {
          connect: products,
        },
        description,
      },
    });

    if (!collection) {
      return {
        status: 404,
        success: true,
        data: collection,
      };
    }

    return {
      status: 200,
      success: true,
      data: collection,
    };
  } catch (error) {
    return { status: 400, success: false };
  }
};
export const deleteCollection = async (
  req: Request,
  res: Response
): Promise<DataObject> => {
  try {
    const { id } = req.params;

    await prisma.collection.delete({
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

export const updateCollection = async (
  req: Request,
  res: Response
): Promise<DataObject> => {
  try {
    const { id } = req.params;
    const { name, description, products } = req.body;

    const updatedCollection = await prisma.collection.update({
      where: {
        handle: id,
      },
      data: { name, description, products },
    });

    return {
      status: 200,
      success: true,
      data: updatedCollection,
    };
  } catch (error) {
    return { status: 400, success: false };
  }
};
