import { Router } from "express";
import { loginController } from "../controllers/login.controller.js";
export const loginRoutes = Router();

loginRoutes.post("/", loginController.loginUser); 
