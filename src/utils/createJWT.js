import jwt from "jsonwebtoken";

const secret = 'lol'

export function createJWT({ id ,email}) {
  const payload={
    id,
    email
  }
  console.log(id);

  return new Promise ((res,rej)=>{
    jwt.sign(payload,secret,(err,token)=>{

      if(err) rej(err) 
  
      res (token)

  })
   
  });
}

