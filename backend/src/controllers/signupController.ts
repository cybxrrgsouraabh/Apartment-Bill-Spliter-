import Prisma from "../prismaClient";
import { Request, Response } from "express";
import { regUserType } from "../schema";
import jwt from "jsonwebtoken";
import JWT_SECRET_KEY from "../config";



export const registerUser = async (req:Request, res: Response)=>{
  
    const {email, password, firstName, lastName, phoneNo, role}: regUserType = req.body;

    const exists = await Prisma.registeredUser.findUnique({
        where: {email}
    });
    console.log(req.body);
    console.log(exists);
    if(!exists){
        try{
            
            const UserInfo = await Prisma.registeredUser.create({
                data: {
                    email,
                    password, 
                    firstName,
                    lastName,
                    phoneNo,
                    role
                }
            });
           
            
            const token = jwt.sign({email: UserInfo.email, role: UserInfo.role}, JWT_SECRET_KEY);
        
            res.status(200).json({
                msg: "Successfully Registered the user",
                token:`Bearer ${token}`
            });
    
        }catch(err){
    
            res.status(500).json({err});
        }

    }

    else{
        res.status(500).json({
            msg: " the user already exists, please login"
        })
    }
}


