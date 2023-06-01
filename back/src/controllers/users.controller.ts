import { Request, Response } from "express";
import {
  TUserRequest,
  TUserResponse,
  TUsersResponse,
} from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.service";
import { listUsersService } from "../services/users/listUsers.service";
import { retrieveUserService } from "../services/users/retrieveUser.service";
import { updateUserService } from "../services/users/updateUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { fullname, email, password, phone }: TUserRequest = req.body;
  const newUser = await createUserService({ fullname, email, password, phone });

  return res.status(201).json(newUser);
};

const listUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users: TUsersResponse = await listUsersService();

  return res.status(200).json(users);
};

const retrieveUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = Number(res.locals.userId);
  const user = await retrieveUserService(userId);

  return res.json(user);
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUserRequest = req.body;
  const userId: number = Number(res.locals.userId);

  const updatedUser: TUserResponse = await updateUserService(userData, userId);

  return res.status(200).json(updatedUser);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteUserService(Number(res.locals.userId));

  return res.status(204).json();
};

export {
  createUserController,
  listUsersController,
  retrieveUserController,
  updateUserController,
  deleteUserController,
};
