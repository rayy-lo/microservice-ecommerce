import express, { Application, Request, Response } from "express";
import productRouter from "./routes/product";
import collectionRouter from "./routes/collection";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/product", productRouter);
app.use("/api/collection", collectionRouter);

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
