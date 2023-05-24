import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import {
  TContactResponse,
  TContactsUpdateRequest,
} from "../../interfaces/contacts.interfaces";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors";
import { contactSchema } from "../../schemas/contacts.schemas";

const updateContactService = async (
  data: TContactsUpdateRequest,
  contactId: number
): Promise<TContactResponse> => {
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const oldContact: Contact | null = await contactsRepository.findOneBy({
    id: contactId,
  });

  if (!oldContact) {
    throw new AppError("Contact not found", 404);
  }

  const newContactData = contactsRepository.create({
    ...oldContact,
    ...data,
  });

  await contactsRepository.save(newContactData);

  return contactSchema.parse(newContactData);
};

export { updateContactService };
