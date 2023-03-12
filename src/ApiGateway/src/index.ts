import express, { Application } from "express";
import { cartProxy, catalogProxy } from "./middleware/proxies";
import cors from "cors";

const app: Application = express();
const PORT = 3004;

app.use(cors());

app.use(cartProxy);
app.use(["/collection", "/product"], catalogProxy);

app.listen(PORT, () => {
  console.log("API Gateway running on 3004");
});
