import express from "express";
import { createUsers, deleteUsers, getUsers, userTotal } from "../controllers/userController";

const router = express.Router();

// create a new users
router.post("/", createUsers);

// get all the users
router.get("/", getUsers);

// Delete an user
router.delete("/:id", deleteUsers);

router.get("/split", userTotal);

export default router;