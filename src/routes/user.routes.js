import { Router } from "express";

import {UserController} from '../controllers/user.controller.js'

const userRouter = Router();

userRouter.get("/",UserController.getAll);

userRouter.get("/:id", UserController.getById);

userRouter.post("/", UserController.createUser);

userRouter.patch('/:id',UserController.updateUser)

export default userRouter;
