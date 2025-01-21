import { Request, Response } from "express";
import Prisma from "../prismaClient";

// to  create a split
export const createSplit = async(req: Request, res: Response)=>{
    const { percentage, userId, expenseId} = req.body;

    try{
        const newSplit = await Prisma.split.create({
            data:{
                
                percentage,
                userId,
                expenseId

            }
        })
        res.status(201).json(newSplit);
    }catch (error) {
        res.status(500).json({error: `failed to create a new split, ${error}` })
    }
};

// to update an split 
export const updateSplit = async(req: Request, res: Response)=>{
    const {id, percentage} = req.body;
    try{
        const newSplit = await Prisma.split.update({
            where: {id},
            data: {percentage}
        });
        res.status(201).json(`split Updated successsfully to ${newSplit.percentage}`);
    }catch (error) {
        res.status(500).json({error: "failed to update the split"})
    }
};


export const deleteSplit = async(req: Request, res: Response)=>{
    const {id} = req.params;
    const intID = parseInt(id);

    try{

        await Prisma.split.delete({
            where: {id: intID}
        });
        res.status(200).json({msg: `the split has been removed`});
    }
    catch(err){
        res.status(500).json({err: "an error occured while deleting the split"})
    }
}


// to fetch all the expenses
export const getSplits = async(req: Request, res: Response)=>{
    try{
        const splits = await Prisma.split.findMany();
        res.status(201).json(splits);
    }catch (error) {
        res.status(500).json({error: "failed to fetch all the splits"})
    }
};
