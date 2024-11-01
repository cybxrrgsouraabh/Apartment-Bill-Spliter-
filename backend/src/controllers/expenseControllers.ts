import { Request, Response } from "express";
import Prisma from "../prismaClient";
import { fetchGroupExpense } from "../services/fetchExpenseService";
import { createExpenseSchema } from "../schema";

// to  create a expense
export const createExpense = async(req: Request, res: Response)=>{

    
    const inputValidation = createExpenseSchema.safeParse(req.body);
    if(!inputValidation.success){
        res.status(201).json({msg: "please enter a valid input"})
    }
    else{
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

// fetch all the expenses of a group 
// export const groupExpenses = async(req: Request, res: Response)=>{
//     const {groupId}= req.body;
//     try{
//         const expenses = await fetchGroupExpense(groupId);
//         res.status(201).json(expenses);
//     }
//     catch (error){
//         res.status(500).json({error: "an error occured while fetching the group expenses"})
//     }
// }