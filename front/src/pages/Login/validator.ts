import { z } from "zod";

export const schema = z.object({
  email: z.string().email("Deve ser um email válido"),
  password: z.string().nonempty("O campo não pode ser vazio"),
});

export type LoginData = z.infer<typeof schema>;
