import express, { Request, Response } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../controllers/product";
import { sendSuccess, sendError } from "../helpers/response";

const router = express.Router();

router.get("/:id", async (req: Request, res: Response) => {
  const data = await getProduct(req, res);
  data.success ? sendSuccess(res, data) : sendError(res, data);
});
router.put("/:id", async (req: Request, res: Response) => {
  const data = await updateProduct(req, res);
  data.success ? sendSuccess(res, data) : sendError(res, data);
});
router.delete("/:id", async (req: Request, res: Response) => {
  const data = await deleteProduct(req, res);
  data.success ? sendSuccess(res, data) : sendError(res, data);
});
router.post("/", async (req: Request, res: Response) => {
  const data = await createProduct(req, res);
  data.success ? sendSuccess(res, data) : sendError(res, data);
});

export default router;
