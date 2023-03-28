import express, { Application } from "express";
import { authController } from "./controllers/authenticate";
import { registerController } from "./controllers/register";

const app: Application = express();

app.use(express.json());

// TODO: Create 4 different endpoints
// /register, /authenticate, /authorize

app.post("/api/register", registerController);
app.post("/api/login", authController);

app.listen(3005, () => {
  console.log("Listening on port 3005");
});
