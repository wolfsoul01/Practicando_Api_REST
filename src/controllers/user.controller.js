import { readJSON } from "../utils/readJSON.js";
import { validarUser } from "../schema/userZod.js";
import { randomUUID } from "crypto";

const users = readJSON("../db/local/db.json") || [];

export class UserController {
  static async getAll(req, res) {
    res.json(users);
  }

  static async getById(req, res) {
    const { id } = req.params;

    const userId = users.find((item) => item.Id_user === id);
    console.log(userId);
    res.json(userId);
  }

  static async createUser(req, res) {
    const body = req.body;

    const data = validarUser(body);

    if (!data.success) res.json({ message: "Error ", err: data.error });

    const newUser = {
      id_user: randomUUID(),
      create: Date.now(),
      ...data.data,
    };

    res.json(newUser);
  }
}
