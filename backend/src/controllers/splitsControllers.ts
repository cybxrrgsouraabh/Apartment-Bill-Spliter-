import { Request, Response } from "express";
import Prisma from "../prismaClient";

// to  create a expense
export const createSplit = async(req: Request, res: Response)=>{
    const { amount, userId, expenseId} = req.body;

    try{
        const newSplit = await Prisma.split.create({
            data:{
                
                amount,
                userId,
                expenseId

            }
        })
        res.status(201).json(newSplit);
    }catch (error) {
        res.status(500).json({error: "failed to create a new split "})
    }
};

// to fetch all the expenses
export const getSplits = async(req: Request, res: Response)=>{
    try{
        const splits = await Prisma.split.findMany();
        res.status(201).json(splits);
    }catch (error) {
        res.status(500).json({error: "failed to fetch all the splits"})
    }
};

// uto delete an expense 
export const updateSplit = async(req: Request, res: Response)=>{
    const {id, amount} = req.body;
    try{
        const newSplit = await Prisma.split.update({
            where: {id},
            data: {amount}
        });
        res.status(201).json(`split Updated successsfully to ${newSplit.amount}`);
    }catch (error) {
        res.status(500).json({error: "failed to update the split"})
    }
};