import { z } from "zod";

export const schema = z.object({
  fullname: z.string().min(2, "Nome deve ter, no mínimo, 2 caracteres."),
  email: z.string().email("Deve ser um email válido."),
  phone: z.string().length(11, "Telefone deve ter 11 caracteres."),
});

export type CreateContactData = z.infer<typeof schema>;
