import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginData, schema } from "./validator";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const { signIn } = useAuth();

  return (
    <main>
      <h2>Login</h2>

      <form onSubmit={handleSubmit(signIn)}>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" {...register("email")} />
        {errors.email?.message && <small>{errors.email.message}</small>}

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register("password")} />
        {errors.password?.message && <small>{errors.password.message}</small>}

        <button type="submit">Entrar</button>
      </form>
      <section>
        <h3>Novo por aqui?</h3>
        <Link to="/register">Cadastre-se</Link>
      </section>
    </main>
  );
};
