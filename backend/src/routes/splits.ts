import express from "express";
import { createSplit, getSplits, updateSplit } from "../controllers/splitsControllers";

const router = express.Router();


// to add the splits
router.post("/", createSplit);

// to update/edit the splits
router.put("/", updateSplit);


// to get all the splits 
router.get("/", getSplits);

export default router;