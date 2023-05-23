import { Request, Response } from "express";
import { TUserRequest, TUserResponse, TUsersResponse } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.service";
import { listUsersService } from "../services/users/listUsers.service";
import { retrieveUserService } from "../services/users/retrieveUser.service";
import { updateUserService } from "../services/users/updateUser.service";

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

const updateUserController = async (req: Request, res: Response): Promise<Response> => {
  const { email, fullname, password, phone }: TUserRequest = req.body;
  const userId: number = Number(req.params.id);

  const updatedUser: TUserResponse= await updateUserService(userId, {email, fullname, password, phone});

  return res.status(200).json(updatedUser);
}

export { createUserController, listUsersController, retrieveUserController, updateUserController };
