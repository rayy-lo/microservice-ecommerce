import express, { Application, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app: Application = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send(`Server is running on port: 3001`);
});

app.post("/api/product", async (req: Request, res: Response) => {
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
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
