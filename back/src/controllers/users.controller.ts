import { Request, Response } from "express";
import { TUserRequest, TUsersResponse } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.service";
import { listusersService } from "../services/users/listUsers.service";

const createUserController = async (req: Request, res: Response): Promise<Response> => {
  const { fullname, email, password, phone }: TUserRequest = req.body;
  const newUser = await createUserService({ fullname, email, password, phone });

  return res.status(201).json(newUser);
};

const listUsersController = async (req: Request, res: Response): Promise<Response> => {
  const users: TUsersResponse = await listusersService();

  return res.status(200).json(users);
}

export { createUserController, listUsersController };
