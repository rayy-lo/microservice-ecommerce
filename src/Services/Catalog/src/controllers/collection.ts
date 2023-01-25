import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCollection = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const collectionId = Number(id);

    const collection = await prisma.collection.findUnique({
      where: {
        id: collectionId,
      },
      include: { products: true },
    });

    if (collection === null) {
      res.status(404).json({
        message: "Collection Not Found",
      });
    }

    res.status(200).json({
      data: collection,
    });
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
};

export const createCollection = async (req: Request, res: Response) => {
  try {
    const { name, products, description } = req.body;
    const collection = await prisma.collection.create({
      data: {
        name,
        products: {
          connect: products,
        },
        description,
      },
    });

    res.status(201).json({
      data: collection,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error,
    });
  }
};
export const deleteCollection = async (req: Request, res: Response) => {};
export const updateCollection = async (req: Request, res: Response) => {};
