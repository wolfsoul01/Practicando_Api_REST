import { validarUser, partialValidUser } from "../schema/userZod.js";
import { UserModel } from "../model/user.model.js";
import jwt from "jsonwebtoken";
export class UserController {

  static async getAll(req, res) {

    console.log('Es esta papu:',req.id);
   
    const users = await UserModel.getAllUser();

    res.json(users.filter(user=> user.isActive));
  }

  static async getById(req, res) {
    const { id } = req.params;

    const userId = await UserModel.getById(id);
    res.json(userId);
  }

  static async createUser(req, res) {
    const body = req.body;

    const data = validarUser(body);

    if (!data.success) return res.json({ message: "Error ", err: data.error });

    const { id_user, ...restUser } = await UserModel.createUser(data.data);
    res.json(restUser);
  }

  static async updateUser(req, res) {
    const { id } = req.params;
    const result = partialValidUser(req.body);

    if (!result.success)
      return res.json({ message: "Error", err: result.error });

    const { id_user, ...restUser } = await UserModel.udateUser({
      userData: result.data,
      id,
    });
    res.json(restUser);
  }
}
