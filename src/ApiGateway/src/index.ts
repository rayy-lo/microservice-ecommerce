import express, { Application } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import cors from "cors";

const app: Application = express();
const PORT = 3004;

app.use(cors());
app.use(
  "/cart",
  createProxyMiddleware({
    target: `${process.env.CART_API_URL}/api`,
    changeOrigin: true,
  })
);

app.listen(PORT, () => {
  console.log("API Gateway running on 3004");
});
