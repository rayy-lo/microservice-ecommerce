import express, { Application } from "express";
import { createClient } from "redis";
import cartRouter from "./routes/cart";
import cookieParser from "cookie-parser";
import { setCookie } from "./middleware/setCookie";

const app: Application = express();
app.use(cookieParser());
app.use(express.json());
app.use(setCookie);
app.use("/api/cart", cartRouter);

export const redisClient = createClient({
  url: process.env.REDIS_DB_URL,
});

redisClient.on("error", function (err) {
  console.log("Could not establish a connection with redis. " + err);
});
redisClient.on("connect", function (err) {
  console.log("Connected to redis successfully");
});

app.listen(3002, async () => {
  console.log("Listening on port 3002");
  await redisClient.connect();
});
