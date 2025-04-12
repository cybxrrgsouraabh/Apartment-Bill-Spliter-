import express from "express";
import { createGroup, deleteGroup, getGroups } from "../controllers/groupController";
import { deleteMiddleware } from "../middlewares/deleteValidation";
import { deleteSchema, createGroupSchema } from "../schema";
import { inputValidationMiddleWare } from "../middlewares/inputValidation";
import { jwtAuthMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

// create a new group
router.post("/", jwtAuthMiddleware,inputValidationMiddleWare(createGroupSchema),createGroup);

// get all the groups
router.get("/", getGroups);

// Delete an group
router.delete("/:id", jwtAuthMiddleware,deleteMiddleware(deleteSchema),deleteGroup);


export default router;