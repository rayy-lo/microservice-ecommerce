import express, { Application } from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import { createClient } from "redis";
import cartRouter from "./routes/cart";

const app: Application = express();
app.use(express.json());

app.use("/api/cart", cartRouter);

const RedisStore = connectRedis(session);
const client = createClient({
  url: process.env.REDIS_DB_URL,
});

client.on("error", function (err) {
  console.log("Could not establish a connection with redis. " + err);
});
client.on("connect", function (err) {
  console.log("Connected to redis successfully");
});

app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: true,
    saveUninitialized: false,
    store: new RedisStore({ client }),
  })
);

app.listen(3002, async () => {
  console.log("Listening on port 3002");
  await client.connect();
});
