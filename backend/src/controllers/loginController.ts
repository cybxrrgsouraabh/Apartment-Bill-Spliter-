import Prisma from "../prismaClient";
import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import JWT_SECRET_KEY from "../config";


export const loginUser = async(req: Request, res: Response)=>{

    const {email, password} = req.body;
    const exists = await Prisma.registeredUser.findUnique({
        where: {email}
    });

    if(!exists){
        res.status(500).json({msg: "the user doesn't exists please signUp!!"});
    }
    try{

        const loginInfo = await Prisma.registeredUser.findUnique({
            where: {email,
                password
            }
        })
        const token = jwt.sign({email: loginInfo?.email}, JWT_SECRET_KEY);
        res.status(500).json({
            msg: "Logged in successfully",
            token: token
        })


    }
    catch(err){
        res.status(500).json({err: "Error occured while logining the user"});
    }
}