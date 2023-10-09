import { Router } from "express";

import { UserController } from "../controllers/user.controller.js";
import { validarJWT } from "../middlewares/validtJWT.js";
import { validarUser, validarUserPartial } from "../middlewares/validarUser.js";

const userRouter = Router();

userRouter.get("/", [validarJWT], UserController.getAll);

userRouter.get("/:id", UserController.getById);

userRouter.post("/", [validarUser], UserController.createUser);

userRouter.patch("/:id", [validarUserPartial], UserController.updateUser);

export default userRouter;
