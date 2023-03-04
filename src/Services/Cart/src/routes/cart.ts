import { Router } from "express";
import { getCart, postCart } from "../controllers/cart";
import { processCart } from "../middleware/processCart";

const router = Router();

router.get("/", getCart);
router.post("/", processCart, postCart);

export default router;
