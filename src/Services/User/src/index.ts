import express, { Application } from "express";
import { authController } from "./controllers/authenticate";
import { registerController } from "./controllers/register";

const app: Application = express();

// TODO: Create 4 different endpoints
// /register, /authenticate, /authorize

app.post("/register", registerController);
app.post("/authenticate", authController);

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
