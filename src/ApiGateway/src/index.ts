import express, { Application } from "express";
import { cartProxy, catalogProxy, userProxy } from "./middleware/proxies";
import cors from "cors";

const app: Application = express();
const PORT = 3004;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(cartProxy);
app.use(["/collection", "/product"], catalogProxy);
app.use(["/login", "/register"], userProxy);

app.listen(PORT, () => {
  console.log("API Gateway running on 3004");
});
