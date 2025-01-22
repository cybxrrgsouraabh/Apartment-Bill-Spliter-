import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken";
import JWT_SECRET_KEY from "../config";



export const jwtAuthMiddleware =async (req: Request, res: Response, next: NextFunction)=>{
    const rawToken: any = req.headers.authorization;
    const splitToken:string  = rawToken?.split(" ");
    const Token: string = splitToken[1];

    const verified:any = jwt.verify(Token, JWT_SECRET_KEY);
    if(!verified.email && !verified.role){
        req.body = verified.email;
        next();
    }
    else{
        res.status(500).json({
            msg: "Couldn't authenticate the user"
        });
    }
}