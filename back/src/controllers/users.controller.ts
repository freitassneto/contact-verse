import { Request, Response } from "express";
import { TUserRequest } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.service";

const createUserController = async (req: Request, res: Response): Promise<Response> => {
  const { fullname, email, password, phone }: TUserRequest = req.body;
  const newUser = await createUserService({ fullname, email, password, phone });

  return res.status(201).json(newUser);
};

export { createUserController };
