import express from "express";
import { createSplit, deleteSplit, getSplits, updateSplit } from "../controllers/splitsControllers";
import { inputValidationMiddleWare } from "../middlewares/inputValidation";
import { createSplitSchema, deleteSchema, updateSplitSchema } from "../schema";
import { deleteMiddleware } from "../middlewares/deleteValidation";
import { jwtAuthMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();


// to add the splits
router.post("/", jwtAuthMiddleware,inputValidationMiddleWare(createSplitSchema),createSplit);

// to update/edit the splits
router.put("/", jwtAuthMiddleware,inputValidationMiddleWare(updateSplitSchema),updateSplit);

// to get all the splits 
router.get("/", getSplits);

router.delete("/:id", jwtAuthMiddleware,deleteMiddleware(deleteSchema), deleteSplit);

export default router;