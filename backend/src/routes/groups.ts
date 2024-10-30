import express from "express";
import { createGroup, deleteGroup, getGroups } from "../controllers/groupController";
const router = express.Router();

// create a new group
router.post("/", createGroup);

// get all the groups
router.get("/", getGroups);

// Delete an group
router.delete("/:id", deleteGroup);


export default router;