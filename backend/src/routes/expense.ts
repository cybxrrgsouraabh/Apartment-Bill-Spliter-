import express from "express";
import { createExpense, deleteExpense} from "../controllers/expenseControllers";
import { inputValidationMiddleWare } from "../middlewares/inputValidation";
import { createExpenseSchema, deleteSchema } from "../schema";
import { deleteMiddleware } from "../middlewares/deleteValidation";
import { jwtAuthMiddleware } from "../middlewares/authMiddleware";


const router = express.Router();


// create a new expense
router.post("/", jwtAuthMiddleware,inputValidationMiddleWare(createExpenseSchema), createExpense);


// Delete an expense
router.delete("/:id", jwtAuthMiddleware,deleteMiddleware(deleteSchema), deleteExpense);

// router.get("/amount", groupExpenses);

export default router;