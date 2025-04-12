import { Request, Response } from "express";
import Prisma from "../prismaClient";
import { createExpenseInput} from "../schema";

// to  create a expense
export const createExpense = async(req: Request, res: Response)=>{

        const {desc, amount, groupId}: createExpenseInput = req.body;
        
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
            res.status(500).json({msg: error})
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

// to delete an expense 
export const deleteExpense = async(req: Request, res: Response)=>{

    const {id} = req.params;
    console.log(id);
    const intID = parseInt(id);
    console.log(intID)
   
    try{
        const deletingExpense = await Prisma.expense.delete({
            where: {id: intID}
        });
        res.status(201).json({msg: `${deletingExpense.description} has been deleted successfully.`});
        
    }catch(err) {
        res.status(500).json({err: "failed to delete the expense "});
    }

};  
