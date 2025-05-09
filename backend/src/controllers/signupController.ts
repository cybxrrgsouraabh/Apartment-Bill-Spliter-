import Prisma from "../prismaClient";
import { Request, Response } from "express";
import { regUserType } from "../schema";
import jwt from "jsonwebtoken";
import JWT_SECRET_KEY from "../config";



export const registerUser = async (req:Request, res: Response)=>{
  
    const {email, password, firstName, lastName, phoneNo}: regUserType = req.body;

    console.log(req.body);
    const exists = await Prisma.registeredUser.findUnique({
        where: {email}
    });
    console.log(exists);
    if(!exists){
        try{
            console.log("entered the try block")
            const UserInfo = await Prisma.registeredUser.create({
                data: {
                    email,
                    password, 
                    firstName,
                    lastName,
                    phoneNo
                }
            });
            console.log(UserInfo)
       
            const token = jwt.sign({email: UserInfo.email}, JWT_SECRET_KEY);
        
            res.status(200).json({
                msg: "Successfully Registered the user",
                token: token
            });
    
        }catch(err: any){
            console.error(err);
            res.status(400).json({ error: "something went wrong. Please try again later." });
        }

    }

    else{
        res.status(409).json({
            msg: " the user already exists, please login"
        })
    }
}


