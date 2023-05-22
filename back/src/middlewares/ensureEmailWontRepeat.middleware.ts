import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";

import { AppError } from "../errors";
import { User } from "../entities/user.entitie";

const ensureEmailWontRepeatMiddleware = async (req: Request,  res: Response,  next: NextFunction): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUserEmail: User | null = await userRepository.findOne({
    where: {
        email: req.body.email
    }
  })

  if (findUserEmail) {
    throw new AppError("Email already registered", 409);
  }

  next();
};

export { ensureEmailWontRepeatMiddleware };
