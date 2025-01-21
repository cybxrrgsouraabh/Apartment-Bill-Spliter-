import express from "express";
import { createGroup, deleteGroup, getGroups } from "../controllers/groupController";
import { deleteMiddleware } from "../middlewares/deleteValidation";
import { deleteSchema, createGroupSchema } from "../schema";
import { inputValidationMiddleWare } from "../middlewares/inputValidation";
const router = express.Router();

// create a new group
router.post("/", inputValidationMiddleWare(createGroupSchema),createGroup);

// get all the groups
router.get("/", getGroups);

// Delete an group
router.delete("/:id", deleteMiddleware(deleteSchema),deleteGroup);


export default router;