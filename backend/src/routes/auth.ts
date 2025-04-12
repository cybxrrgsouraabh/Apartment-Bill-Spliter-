import express from "express";
import { inputValidationMiddleWare } from "../middlewares/inputValidation";
import { registerUser} from "../controllers/signupController";
import { loginUser } from "../controllers/loginController";
import { registeredUserSchema, loginSchema } from "../schema";


const router = express.Router();

router.post("/signup",inputValidationMiddleWare(registeredUserSchema), registerUser);


router.post("/login", inputValidationMiddleWare(loginSchema), loginUser);



export default router;           
