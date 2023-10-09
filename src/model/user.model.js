import { readJSON } from "../utils/readJSON.js";
import { randomUUID } from "crypto";

const users = readJSON("../db/local/db.json") || [];

export class UserModel {
  static async getAllUser() {
    return users;
  }

  static async getById(id) {
    return users.find((item) => item.id_user === id);
  }

  static async createUser(userData) {
    const newUser = {
      id_user: randomUUID(),
      create: Date.now(),
      ...userData,
    };
    users.push(newUser);
    return newUser;
  }
  
  static async getIndexById(id) {
    return users.findIndex((user) => user.id_user === id);
  }

  static async udateUser({ userData, id }) {
    const userIndex = await this.getIndexById(id);

    const newUser = {
      ...users[userIndex],
      ...userData,
    };
    users[userIndex] = newUser;
    return newUser;
  }

  static async validDataLogin({password,email}){

   return users.find(user=> user.email===email && user.password ===password)

  }
}
