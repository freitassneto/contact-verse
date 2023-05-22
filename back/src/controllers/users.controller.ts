import { Request, Response } from "express";
import { TUserRequest, TUsersResponse } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.service";
import { listUsersService } from "../services/users/listUsers.service";
import { retrieveUserService } from "../services/users/retrieveUser.service";

const createUserController = async (req: Request, res: Response): Promise<Response> => {
  const { fullname, email, password, phone }: TUserRequest = req.body;
  const newUser = await createUserService({ fullname, email, password, phone });

  return res.status(201).json(newUser);
};

const listUsersController = async (req: Request, res: Response): Promise<Response> => {
  const users: TUsersResponse = await listUsersService();

  return res.status(200).json(users);
}

const retrieveUserController = async (req: Request, res: Response): Promise<Response> => {
  const userId: number = Number(req.params.id);

  const user = await retrieveUserService(userId)

  return res.json(user);
}

export { createUserController, listUsersController, retrieveUserController };
