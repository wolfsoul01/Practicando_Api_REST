import { partialValidUser, validarUserSchema } from "../schema/userZod.js";


export function validarUser(req,res,next){
    const body = req.body;

    const data = validarUserSchema(body);

    if (!data.success) return res.json({ message: "Error ", err: data.error });

    req.data= data.data
    next()

}
export function validarUserPartial(req,res,next){
    const body = req.body;

    const data = partialValidUser(body);

    if (!data.success) return res.json({ message: "Error ", err: data.error });

    req.data= data.data
    next()

}

