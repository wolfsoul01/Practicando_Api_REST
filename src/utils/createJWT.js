import jwt from "jsonwebtoken";

export function createJWT({ id }) {
  return jwt.sign(id, "lol", {
    expiresIn: 600,
  });
}
