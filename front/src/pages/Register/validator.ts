import { z } from "zod";

export const registerSchema = z.object({
  fullname: z.string().min(2, "O nome deve contar, no mínimo, 2 caracteres"),
  email: z.string().email("Deve ser um email válido"),
  password: z
    .string()
    .min(4, "A senha deve conter, no mínimo, 4 caracteres."),
  phone: z.string().length(11, "O telefone deve ter 11 caracteres"),
});

export type RegisterData = z.infer<typeof registerSchema>;
