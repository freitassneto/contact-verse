import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { RegisterData, registerSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

export const Register = () => {
  const { registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
  });

  return (
    <main>
      <h2>Register</h2>

      <form onSubmit={handleSubmit(registerUser)}>
        <label htmlFor="fullname">Nome completo</label>
        <input type="text" id="fullname" {...register("fullname")} />
        {errors.fullname?.message && <small>{errors.fullname.message}</small>}

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" {...register("email")} />
        {errors.email?.message && <small>{errors.email.message}</small>}

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register("password")} />
        {errors.password?.message && <small>{errors.password.message}</small>}

        <label htmlFor="phone">Telefone</label>
        <input type="text" id="phone" {...register("phone")} />
        {errors.phone?.message && <small>{errors.phone.message}</small>}

        <button type="submit">Cadastrar</button>
      </form>
      <section>
        <h3>Já possui um cadastro?</h3>
        <Link to="/">Fazer login</Link>
      </section>
    </main>
  );
};
