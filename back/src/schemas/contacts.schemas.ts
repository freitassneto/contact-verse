import { z } from "zod";

const contactSchema = z.object({
  id: z.string(),
  fullname: z.string().max(95),
  email: z.string().email().max(45),
  phone: z.string().max(11),
  createdAt: z.date().or(z.string()),
});

const contactSchemaRequest = contactSchema.omit({
  id: true,
  createdAt: true,
});

const contactSchemaUpdate = contactSchema
  .omit({
    id: true,
  })
  .partial();

const contactsSchemaResponse = z.array(contactSchema);

export {
  contactSchema,
  contactSchemaRequest,
  contactSchemaUpdate,
  contactsSchemaResponse,
};
