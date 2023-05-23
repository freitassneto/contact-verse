import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactsController,
  updateContactController,
} from "../controllers/contacts.controller";


const contactsRoutes: Router = Router();

contactsRoutes.post("", createContactController);
contactsRoutes.get("", listContactsController);
contactsRoutes.patch("", updateContactController);
contactsRoutes.delete("", deleteContactController);

export { contactsRoutes };
