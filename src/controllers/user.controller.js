import { validarUserSchema, partialValidUser } from "../schema/userZod.js";
import { UserModel } from "../model/user.model.js";
export class UserController {

  static async getAll(req, res) {

    console.log('Es esta papu:',req.id);
   
    const users = await UserModel.getAllUser();

    res.json(users);
  }

  static async getById(req, res) {
    const { id } = req.params;

    const userId = await UserModel.getById(id);
    res.json(userId);
  }

  static async createUser(req, res) {
   
    const userData = req.data
    const { id_user, ...restUser } = await UserModel.createUser(userData);

    res.json({user:restUser});
  }

  static async updateUser(req, res) {
    const { id } = req.params;
    
    const userData= req.data

    const { id_user, ...restUser } = await UserModel.udateUser({
      userData,
      id,
    });
    res.json(restUser);
  }
}
