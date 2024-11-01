import { Response, Request, NextFunction } from "express";
import { createExpenseInput } from "../schema";
import { ZodSchema } from "zod";

export  const inputValidationMiddleWare = (inputSchema: ZodSchema)=>{
    return (req: Request, res: Response, next: NextFunction)=>{
        const inputValidation = inputSchema.safeParse(req.body);
        if(!inputValidation.success){
            res.status(400).json({
                message: "Invalid input",
                errors: inputValidation.error.errors
            });
        }
        req.body = inputValidation.data;
        next();
    }
};