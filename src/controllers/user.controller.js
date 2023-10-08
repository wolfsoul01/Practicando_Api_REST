import { readJSON } from "../utils/readJSON.js";
import { validarUser ,partialValidUser} from "../schema/userZod.js";
import { randomUUID } from "crypto";

const users = readJSON("../db/local/db.json") || [];

export class UserController {
  static async getAll(req, res) {
    res.json(users);
  }

  static async getById(req, res) {
    const { id } = req.params;

    const userId = users.find((item) => item.Id_user === id);
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

  static async updateUser(req, res) {
    const { id } = req.params;
    const result  = partialValidUser(req.body)

   if(!result.success) res.json({message:'Error',err:result.error})


    const userIndex = users.findIndex((user) => user.Id_user === id);

    const newUser= {
        ...users[userIndex],
        ...result
    }
    res.json(newUser)
  }
}
