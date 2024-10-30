import express from "express";
import { createExpense, deleteExpense, getExpenses } from "../controllers/expenseControllers";

const router = express.Router();


// create a new expense
router.post("/", createExpense);

// get all the expense
router.get("/", getExpenses);

// Delete an expense
router.delete("/:id", deleteExpense);


export default router;