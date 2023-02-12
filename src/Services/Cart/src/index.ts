import express, { Application } from "express";

const app: Application = express();

app.listen(3002, () => {
  console.log("Listening on port 3002");
});
