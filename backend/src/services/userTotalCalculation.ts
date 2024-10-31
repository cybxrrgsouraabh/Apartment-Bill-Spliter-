import Prisma from "../prismaClient";
import { Request, Response } from "express";
import { fetchGroupExpense } from "./fetchExpenseService";

export const totalBill = async(req: Request, res: Response)=>{

    const {userId} = req.body;

    const userSplits = await Prisma.split.findMany({where: {userId}});
    const splitPercentages = userSplits.map(e=>{e.percentage});
    





}