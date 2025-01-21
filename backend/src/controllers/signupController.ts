import Prisma from "../prismaClient";
import { Request, Response } from "express";
import { regUserType } from "../schema";
import jwt from "jsonwebtoken";
import JWT_SECRET_KEY from "../config";



export const registerUser = async (req:Request, res: Response)=>{
  
    const {email, password, firstName, lastName, phoneNo}: regUserType = req.body;

    const exists = await Prisma.registeredUser.findUnique({
        where: {email}
    });
    console.log(exists);
    if(!exists){
        try{
     
            const UserInfo = await Prisma.registeredUser.create({
                data: {
                    email,
                    password, 
                    firstName,
                    lastName,
                    phoneNo
                }
            });
           
       
            const token = jwt.sign({email: UserInfo.email}, JWT_SECRET_KEY);
        
            res.status(200).json({
                msg: "Successfully Registered the user",
                token: token
            });
    
        }catch(err){
    
            res.status(500).json({err: "failed to Register the user"});
        }

    }

    else{
        res.status(500).json({
            msg: " the user already exists, please login"
        })
    }
}


