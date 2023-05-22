import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { TUsersResponse } from "../../interfaces/users.interfaces";
import { multipleUsersSchemaResponse } from "../../schemas/users.schema";

const listusersService = async (): Promise<TUsersResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUsers: User[] = await userRepository.find({
    relations: {
      contacts: true,
    },
  });

  const users: TUsersResponse = multipleUsersSchemaResponse.parse(findUsers);

  return users;
};

export { listusersService };
