import {Request, Response} from "express";
import Prisma from "../prismaClient";

export const fetchGroupExpense = async(req: Request, res: Response)=>{

    const {groupId} = req.body;
    try {
        const groupExpenses = await Prisma.expense.findMany({where: {groupId}});
        const expenseArr = groupExpenses.map(e=>{return e.amount});
        res.status(201).json({expenseArr});
    } catch (error) {
        res.status(500).json({error: "failed to fetch the group expenses", "problem": `${error}`});
    }

};