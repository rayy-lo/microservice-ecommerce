import express, { Request, Response } from "express";
import {
  createCollection,
  deleteCollection,
  getCollection,
  updateCollection,
} from "../controllers/collection";
import { sendSuccess, sendError } from "../helpers/response";

const router = express.Router();

router.get("/:id", async (req: Request, res: Response) => {
  const data = await getCollection(req, res);
  data.success ? sendSuccess(res, data) : sendError(res, data);
});

router.put("/:id", async (req: Request, res: Response) => {
  const data = await updateCollection(req, res);
  data.success ? sendSuccess(res, data) : sendError(res, data);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const data = await deleteCollection(req, res);
  data.success ? sendSuccess(res, data) : sendError(res, data);
});
router.post("/", async (req: Request, res: Response) => {
  const data = await createCollection(req, res);
  data.success ? sendSuccess(res, data) : sendError(res, data);
});

export default router;
