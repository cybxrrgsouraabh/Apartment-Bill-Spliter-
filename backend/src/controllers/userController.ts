import {Request, Response} from "express";
import Prisma from "../prismaClient";
import { totalBill } from "../services/userTotalCalculation";

// to enter users
export const createUsers = async(req: Request, res: Response): Promise<void>=>{
    const {name, email} = req.body;
    console.log(req.body)
    const exists = await Prisma.user.findUnique({
        where: {
            name,
            email
        }
    })
    console.log(exists);
    if(exists){
        res.status(500).json({msg: "the user with same name or email already exists"});
    }

    try{
        const newUser = await Prisma.user.create({
            data:{
                name,
                email
            }
        })
            res.status(201).json(newUser);
    }
    catch (error: any) {
        res.status(500).json({error: error.message})
    }

};


// to delete an user 
export const deleteUsers = async(req: Request, res: Response)=>{
    const {id} = req.params;
    const intID = parseInt(id);
    try{
        const users = await Prisma.user.delete({
            where:{id: intID,},
        });
        res.status(201).json(`${users.name} Deleted Successfully`);
    }catch (error) {
        res.status(500).json({error: "failed to delete the user"})
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

export const userTotal = async(req: Request, res: Response)=>{
    const {userId, groupId} = req.body;
    
    try {
        const userTotalSplit = await totalBill(groupId, userId);
        res.status(201).json(userTotalSplit);
    } catch (error) {
        res.status(500).json({error: "an error occured while generating the total bill of the user "})
    }
}