import z from "zod";

const userSchema = z.object({
  name: z.string(),
  password: z.string().min(5),
  rol: z.enum(["admin", "user"]),
  isActive: z.boolean(),
  email: z.string().email(),
});

export const userLoginSchema= z.object({
  email:z.string().email(),
  password:z.string().min(5)
})

export function validarUserSchema (user) {
  return userSchema.safeParse(user);
}

export function partialValidUser(user){
  return userSchema.partial().safeParse(user)
}

export function validetLogin(body){
  return userLoginSchema.safeParse(body)
}