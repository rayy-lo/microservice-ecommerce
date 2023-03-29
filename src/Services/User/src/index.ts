import express, { Application } from "express";
import { loginController } from "./controllers/login";
import { registerController } from "./controllers/register";
import { hashPassword } from "./middlewares/hashPassword";

const app: Application = express();

app.use(express.json());

// TODO: Create 4 different endpoints
// /register, /authenticate, /authorize

app.post("/api/register", hashPassword, registerController);
app.post("/api/login", loginController);

app.listen(3005, () => {
  console.log("Listening on port 3005");
});
