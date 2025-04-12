import { Request, Response } from "express";
import Prisma from "../prismaClient";

// to create a new group

export const createGroup = async (req: Request, res: Response)=>{

    const {name} = req.body;

    try {
        const group = await Prisma.group.create({
            data: {
                group_name: name
            }
        })
        res.status(201).json(group);
    } catch (error) {
        res.status(500).json({
            error: "failed to create a group"
        })
    }

};

// to get all the groups 

export const getGroups = async (req: Request, res: Response)=>{

    try{
        const group = await Prisma.group.findMany();
        res.status(201).json(group);
    }catch(err){
        res.status(500).json({
            err: "failed to fetch all the groups"
        })
    }
};

// to delete a group

export const deleteGroup = async(req: Request, res: Response)=>{
    const {id} = req.params;
    const intID = parseInt(id);
    try {
        const delGroup = await Prisma.group.delete({where:{id: intID}})
        res.status(201).json(`deleted the ${delGroup.group_name} group successfully`);
    } catch (error) {
        res.status(500).json({
            error: "failed to delete the group"
        })
    }
};

