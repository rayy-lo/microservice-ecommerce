import { Router } from "express";
import { getCart, postCart, deleteCart } from "../controllers/cart";
import { getProductData } from "../middleware/getProductData";

const router = Router();

router.get("/", getCart);
router.post("/", getProductData, postCart);
router.delete("/", deleteCart);

export default router;
