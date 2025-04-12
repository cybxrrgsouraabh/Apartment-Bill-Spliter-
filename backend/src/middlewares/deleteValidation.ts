import { NextFunction } from "express";
import { Request, Response } from "express";
import { ZodSchema } from "zod";
import { deleteSchema } from "../schema";


export const deleteMiddleware = (schema: ZodSchema)=>{
    return async (req: Request, res: Response, next: NextFunction)=>{

        const {id} = req.params;
        const intID = parseInt(id);

        if(isNaN(intID)){
            res.status(500).json({error: "please enter a valid number"});
        }

        const inputValidation = schema.safeParse(intID);
        try{
            if (!inputValidation.success){
                res.status(500).json({msg: "the please enter a valid positive number"});
            }
            next();
        }catch(err){
            res.status(500).json({err: "an error internal error occured"});
        }
        
    }
};