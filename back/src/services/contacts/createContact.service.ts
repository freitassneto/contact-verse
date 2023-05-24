import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import {
  TContactRequest,
  TContactResponse,
} from "../../interfaces/contacts.interfaces";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors";
import { contactSchema } from "../../schemas/contacts.schemas";

const createContactService = async (data: TContactRequest, userId: number): Promise<TContactResponse> => {
  const contactsRepository: Repository<Contact> = AppDataSource.getRepository(Contact);
  const usersRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await usersRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found", 401);
  }

  const contact: Contact = contactsRepository.create({
    ...data,
    user,
  });
  await contactsRepository.save(contact);

  return contactSchema.parse(contact);
};

export { createContactService };
