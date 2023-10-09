import { Router } from "express";

import {UserController} from '../controllers/user.controller.js'
import { validarJWT } from "../middlewares/validtJWT.js";

const userRouter = Router();

userRouter.get("/",validarJWT,UserController.getAll);

userRouter.get("/:id", UserController.getById);

userRouter.post("/", UserController.createUser);

userRouter.patch('/:id',UserController.updateUser)

export default userRouter;
