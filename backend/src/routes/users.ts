import express from "express";
import { createUsers, deleteUsers, getUsers, userTotal } from "../controllers/userController";
import { inputValidationMiddleWare } from "../middlewares/inputValidation";
import { createUsersSchema, deleteSchema, userTotalSchema } from "../schema";
import { deleteMiddleware } from "../middlewares/deleteValidation";
import { jwtAuthMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

// create a new users
router.post("/", jwtAuthMiddleware,inputValidationMiddleWare(createUsersSchema), createUsers);

// Delete an user
router.delete("/:id", jwtAuthMiddleware,deleteMiddleware(deleteSchema), deleteUsers);

// get all the users
router.get("/", getUsers);

router.post("/split", jwtAuthMiddleware, inputValidationMiddleWare(userTotalSchema), userTotal);

export default router; 