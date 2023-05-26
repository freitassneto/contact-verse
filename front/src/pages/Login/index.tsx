import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginData, schema } from "./validator";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { Container, LoginLeftColumn, LoginRightColumn } from "./styles";
import logo from "../../assets/logo-contact-verse.png";

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
    <Container>
      <main>
        <LoginLeftColumn>
          <img src={logo} alt="Logo Contact Verse" />
          <h3>
            A agenda digital que mantém seus contatos sempre ao alcance de suas
            mãos!
          </h3>
        </LoginLeftColumn>
        <LoginRightColumn>
          <h2>Login</h2>

          <form onSubmit={handleSubmit(signIn)}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Digite eu e-mail"
              {...register("email")}
            />
            {errors.email?.message && <small>{errors.email.message}</small>}

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            {errors.password?.message && (
              <small>{errors.password.message}</small>
            )}

            <button type="submit">Entrar</button>
          </form>
          <section className="loginSection">
            <h3>Novo por aqui?</h3>
            <Link to="/register">Cadastre-se</Link>
          </section>
        </LoginRightColumn>
      </main>
    </Container>
  );
};
