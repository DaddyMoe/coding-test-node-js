import { Router, Request, Response } from "express";
import User from "../common/user";
import UserService from "../services/user.service";

class UserController {
  public path = '/user';
  public subPath = this.path + "/user/:id/";
  public router = Router();
  public userSrv: UserService = new UserService();

  constructor() {
    this.intializeRoutes();
    this.userSrv = new UserService();
  }

  public intializeRoutes() {
    this.router.post(this.path+"/signIn", this.signIn);
    this.router.post(this.path+"/login", this.login);
    this.router.get("/users", this.getUsers);
  }

  signIn = async (request: Request, response: Response) => {
    const { name, email, password } = request.body;
    const token = email + "-token-" + password;
    const user: User = {name, email, token, password }
    try {
      let res = await this.userSrv.createUser(user);
      response.send(res);;
    } catch (err) {
      response.send(err);
    }
  }

  login = async (request: Request, response: Response) => {
    try {
      let res = await this.userSrv.loginUser(request.body);
      response.send(res);;
    } catch (err) {
      response.send(err);
    }
  }


  getUsers = async (request: Request, response: Response) => {
    try {
      let res = await this.userSrv.getUsers();
      response.send(res);;
    } catch (err) {
      response.send(err);
    }
  }
}

export default UserController;