import express from "express";
import { createExpense, deleteExpense, getExpenses } from "../controllers/expenseControllers";
import { inputValidationMiddleWare } from "../middlewares/inputValidation";
import { createExpenseSchema } from "../schema";

const router = express.Router();


// create a new expense
router.post("/", inputValidationMiddleWare(createExpenseSchema), createExpense);

// get all the expense
router.get("/", getExpenses);

// Delete an expense
router.delete("/:id", deleteExpense);

// router.get("/amount", groupExpenses);

export default router;