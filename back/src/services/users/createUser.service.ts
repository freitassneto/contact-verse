import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";
import { Repository } from "typeorm";
import { userSchemaResponse } from "../../schemas/users.schema";

const createUserService = async ({fullname, email, password, phone}: TUserRequest): Promise<TUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User = userRepository.create({
        fullname,
        email,
        password,
        phone
    })

    await userRepository.save(user);

    const newUser: TUserResponse = userSchemaResponse.parse(user);

    return newUser;
}

export { createUserService }