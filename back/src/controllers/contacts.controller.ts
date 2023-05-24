import { Request, Response } from "express";
import { createContactService } from "../services/contacts/createContact.service";
import { listContactsService } from "../services/contacts/listContacts.service";
import { TContactsUpdateRequest } from "../interfaces/contacts.interfaces";
import { updateContactService } from "../services/contacts/updateContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = Number(res.locals.userId);

  const newContact = await createContactService(req.body, userId);

  return res.status(201).json(newContact);
};

const listContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = res.locals.userId;
  const contacts = await listContactsService(userId);

  return res.json(contacts);
};

const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId = Number(req.params.id);
  const updatedValues: TContactsUpdateRequest = req.body;
  const updateContact = await updateContactService(updatedValues, contactId);

  return res.json(updateContact);
};

const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId = Number(req.params.id);
  await deleteContactService(contactId);

  return res.status(204).json();
};

export {
  createContactController,
  listContactsController,
  updateContactController,
  deleteContactController,
};
