import express from "express";
import { createExpense, deleteExpense} from "../controllers/expenseControllers";
import { inputValidationMiddleWare } from "../middlewares/inputValidation";
import { createExpenseSchema, deleteSchema } from "../schema";
import { deleteMiddleware } from "../middlewares/deleteValidation";

const router = express.Router();


// create a new expense
router.post("/", inputValidationMiddleWare(createExpenseSchema), createExpense);


// Delete an expense
router.delete("/:id", deleteMiddleware(deleteSchema), deleteExpense);

// router.get("/amount", groupExpenses);

export default router;