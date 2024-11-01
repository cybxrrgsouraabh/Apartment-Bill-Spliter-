import {Request, Response} from "express";
import Prisma from "../prismaClient";
import { totalBill } from "../services/userTotalCalculation";

// to enter users
export const createUsers = async(req: Request, res: Response)=>{
    const {name, email} = req.body;

    try{
        const newUser = await Prisma.user.create({
            data:{
                name,
                email
            }
        })
        res.status(201).json(newUser);
    }catch (error) {
        res.status(500).json({error: "failed to create the user "})
    }
};

// to fetch all the users
export const getUsers = async(req: Request, res: Response)=>{
    try{
        const users = await Prisma.user.findMany();
        res.status(201).json(users);
    }catch (error) {
        res.status(500).json({error: "failed to fetch the users"})
    }
};

// to delete an user 
export const deleteUsers = async(req: Request, res: Response)=>{
    const {id} = req.params;
    try{
        const users = await Prisma.user.delete({
            where:{id: parseInt(id)}
        });
        res.status(201).json(`${users.name} Deleted Successfully`);
    }catch (error) {
        res.status(500).json({error: "failed to delete the user"})
    }
};

export const userTotal = async(req: Request, res: Response)=>{
    const {userId, groupId} = req.body;
    
    try {
        const userTotalSplit = await totalBill(groupId, userId);
        res.status(201).json(userTotalSplit);
    } catch (error) {
        res.status(500).json({error: "an error occured while generating the total bill of the user "})
    }
}