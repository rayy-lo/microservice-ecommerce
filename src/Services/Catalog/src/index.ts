import express, { Application, Request, Response } from "express";
import productRouter from "./routes/product";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/product", productRouter);

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
