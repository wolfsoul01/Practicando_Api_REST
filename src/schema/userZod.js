import z from "zod";

const userSchema = z.object({
  name: z.string(),
  password: z.string().min(5),
  rol: z.enum(["admin", "user"]),
  isActive: z.boolean(),
  email: z.string().email(),
});

export function validarUser (user) {
  return userSchema.safeParse(user);
}
