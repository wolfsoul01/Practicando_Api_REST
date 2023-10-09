import jwt from 'jsonwebtoken'

export function validarJWT(req, res, next) {
  const token = req.header("Authorization");

  if (!token) return res.json({ meg: "En esta ruta es necesario un token" });

  try {
    const  {id}  = jwt.verify(token, "lol");

    req.id=id
    
    next();
  } catch (err) {
    console.log(err);
    return res.json({ msg: "Error con el token", err:err});
  }
}
