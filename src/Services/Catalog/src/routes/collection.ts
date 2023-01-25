import express from "express";
import {
  createCollection,
  deleteCollection,
  getCollection,
  updateCollection,
} from "../controllers/collection";

const router = express.Router();

router.get("/:id", getCollection);
router.put("/:id", updateCollection);
router.delete("/:id", deleteCollection);
router.post("/", createCollection);

export default router;
