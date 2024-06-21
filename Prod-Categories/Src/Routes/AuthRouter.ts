import { Router } from "express";
import {registerUser,loginUser,welcomePage} from "../Controllers/AuthController"
import { verifyToken } from "../Middlewares";


const   authRouter = Router()

authRouter.post("/register",registerUser)
authRouter.post("/login", loginUser)
authRouter.get("",verifyToken, welcomePage)


export default  authRouter