import express, { Application } from "express";
import cartRouter from "./routes/cart";

const app: Application = express();
const PORT = 3004;

app.use("/cart", cartRouter);

app.listen(PORT, () => {
  console.log("API Gateway running on 3004");
});
