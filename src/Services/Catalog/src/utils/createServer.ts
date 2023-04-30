import express, { Application } from "express";
import productRouter from "../routes/product";
import collectionRouter from "../routes/collection";

export default function createServer() {
  const app: Application = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api/product", productRouter);
  app.use("/api/collection", collectionRouter);

  return app;
}
