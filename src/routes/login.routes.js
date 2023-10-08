import { Router } from "express";
import { createJWT } from "../utils/createJWT.js";
import { validetLogin } from "../schema/userZod.js";
export const loginRoutes = Router();

loginRoutes.post("/", (req, res) => {
  console.log(req.body);
  const result = validetLogin(req.body);

  if (!result.success) return res.json({ msg: "Post no valido", err: result.error });

 return res.json({
    msg: "login ok bro",
    ...result.data,
  });
}); 
