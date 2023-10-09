import { createJWT} from "../utils/createJWT.js";
import { validetLogin } from "../schema/userZod.js";
import { UserModel } from "../model/user.model.js";

export class loginController {
  static async loginUser(req, res) {
    const result = validetLogin(req.body);

    if (!result.success)
      return res.json({ msg: "Post no valido", err: result.error });

    const user = await UserModel.validDataLogin(result.data);

    if (!user) return res.json({ msg: "Error password||email no valido " });

    const jwt = await createJWT({ id: user.id_user, email: result.data.email });

    return res.json({
      msg: "login ok bro",
      ...result.data,
      jwt,
    });
  }
}
