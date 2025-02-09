import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken";
import JWT_SECRET_KEY from "../config";

export const jwtAuthMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  try {
   
    const rawToken = req.headers.authorization;
    
    if (!rawToken || !rawToken.startsWith("Bearer ")) {
       res.status(401).json({ msg: "Authorization token missing" });
    }
    else{

        const token = rawToken.split(" ")[1];
        const verified = jwt.verify(token, JWT_SECRET_KEY) as { email: string };
       
    if(!verified.email){
        res.status(401).json({ err: "Invalid token payload" });
    }
      next();
    }
  
  } catch(err) {
    // Handle any errors during token verification (e.g., expired, malformed token)
     res.status(401).json({ err: "Authentication failed, couldnt verify the user" });
  }
  
}