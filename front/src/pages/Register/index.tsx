import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { RegisterData, registerSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { Container, RegisterLeftColumn, RegisterRightColumn } from "./styles";
import logo from "../../assets/logo-contact-verse.png"

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
    <Container>
      <main>
        <RegisterLeftColumn>
          <h2>Register</h2>

          <form onSubmit={handleSubmit(registerUser)}>
            <label htmlFor="fullname">Nome completo</label>
            <input type="text" id="fullname" placeholder="Digite seu nome completo" {...register("fullname")} />
            {errors.fullname?.message && (
              <small>{errors.fullname.message}</small>
            )}

            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="exemplo@mail.com" {...register("email")} />
            {errors.email?.message && <small>{errors.email.message}</small>}

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="******" {...register("password")} />
            {errors.password?.message && (
              <small>{errors.password.message}</small>
            )}

            <label htmlFor="phone">Telefone</label>
            <input type="text" id="phone" placeholder="xx xxxxx xxxx" {...register("phone")} />
            {errors.phone?.message && <small>{errors.phone.message}</small>}

            <button type="submit">Cadastrar</button>
          </form>
        </RegisterLeftColumn>
        <RegisterRightColumn>
          <img src={logo} alt="" />
          <h3>Já possui um cadastro?</h3>
          <Link to="/">Fazer login</Link>
        </RegisterRightColumn>
      </main>
    </Container>
  );
};
