import { Request, Response } from "express";
import Prisma from "../prismaClient";

// to  create a expense
export const createExpense = async(req: Request, res: Response)=>{
    const {desc, amount, groupId} = req.body;

    try{
        const newExpense = await Prisma.expense.create({
            data:{
                description: desc,
                amount,
                groupId
            }
        })
        res.status(201).json(newExpense);
    }catch (error) {
        res.status(500).json({error: "failed to create a new expense "})
    }
};

// to fetch all the expenses
export const getExpenses = async(req: Request, res: Response)=>{
    try{
        const expenses = await Prisma.expense.findMany();
        res.status(201).json(expenses);
    }catch (error) {
        res.status(500).json({error: "failed to fetch all the expenses"})
    }
};

// uto delete an expense 
export const deleteExpense = async(req: Request, res: Response)=>{
    const {id} = req.params;
    try{
        const delExpenses = await Prisma.expense.delete({
            where:{id: parseInt(id)}
        });
        res.status(201).json(`${delExpenses.description} deleted successsfully`);
    }catch (error) {
        res.status(500).json({error: "failed to delete the expenses"})
    }
};