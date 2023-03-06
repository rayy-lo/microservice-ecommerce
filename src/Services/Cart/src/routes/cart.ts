import { Router } from "express";
import { getCart, postCart } from "../controllers/cart";
import { getProductData } from "../middleware/getProductData";

const router = Router();

router.get("/", getCart);
router.post("/", getProductData, postCart);

export default router;
