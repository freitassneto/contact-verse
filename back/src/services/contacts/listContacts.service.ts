import { Repository } from "typeorm";
import { TContactsResponse } from "../../interfaces/contacts.interfaces";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors";
import { contactsSchemaResponse } from "../../schemas/contacts.schemas";

const listContactsService = async (
  userId: number
): Promise<TContactsResponse> => {
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const usersRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await usersRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found", 401);
  }

  const contacts: Contact[] = await contactsRepository.find({
    where: {
      user: user,
    },
  });

  return contactsSchemaResponse.parse(contacts);
};

export { listContactsService };
