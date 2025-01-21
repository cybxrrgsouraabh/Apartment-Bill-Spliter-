import express from "express";
import { createUsers, deleteUsers, getUsers, userTotal } from "../controllers/userController";
import { inputValidationMiddleWare } from "../middlewares/inputValidation";
import { createUsersSchema, deleteSchema, userTotalSchema } from "../schema";
import { deleteMiddleware } from "../middlewares/deleteValidation";

const router = express.Router();

// create a new users
router.post("/", inputValidationMiddleWare(createUsersSchema), createUsers);

// Delete an user
router.delete("/:id", deleteMiddleware(deleteSchema), deleteUsers);

// get all the users
router.get("/", getUsers);

router.post("/split", inputValidationMiddleWare(userTotalSchema), userTotal);

export default router;