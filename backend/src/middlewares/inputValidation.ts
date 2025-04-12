import { Response, Request, NextFunction } from "express";
import { ZodSchema } from "zod";

export const inputValidationMiddleWare = (userSchema: ZodSchema)=>{
    return (req: Request, res: Response, next: NextFunction)=>{
        const inputValidation = userSchema.safeParse(req.body);

        try {
            if(!inputValidation.success){
                res.status(500).json({msg:"please enter a valid input"})
                return;
            }
           
            req.body = inputValidation.data;
            next();
        } catch (error) {
            res.status(500).json({msg:"an internal error occured"})
        }
    }
}

