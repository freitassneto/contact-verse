import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors";
import { TUserResponse, TUserUpdate } from "../../interfaces/users.interfaces";
import { userSchemaResponse } from "../../schemas/users.schema";

const updateUserService = async (userId: number, newUserData: TUserUpdate): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData: User | null = await userRepository.findOneBy({
    id: userId,
  });

  const newUser = userRepository.create({
    ...oldUserData,
    ...newUserData,
  });

  await userRepository.save(newUser);

  const updatedUser: TUserResponse = userSchemaResponse.parse(newUser);

  return updatedUser;
};

export { updateUserService };
