import { Router, Request, Response } from "express";
import axios from "axios";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("got cart");
});

router.post("/", (req: Request, res: Response) => {
  console.log(req);
});

export default router;
