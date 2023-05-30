import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { TUserResponse } from "../../interfaces/users.interfaces";
import { userSchemaResponse } from "../../schemas/users.schema";

const retrieveUserService = async (userId: number): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser: User | null = await userRepository.findOne({
    relations: {
      contacts: true
    },
    where: {
      id: userId
    }
  });

  const user: TUserResponse = userSchemaResponse.parse(findUser);

  return user;
};

export { retrieveUserService };
