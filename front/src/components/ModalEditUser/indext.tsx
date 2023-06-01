import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from "../../styles/Form";
import { Modal } from "../Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../pages/Register/validator";
import { useAuth } from "../../hooks/useAuth";
import { UserData } from "../../pages/Dashboard";

interface ModalEditUserProps {
  toggleProfileModal: () => void;
}

export const ModalEditUser = ({ toggleProfileModal }: ModalEditUserProps) => {
  const { user, editUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: {
      fullname: user?.fullname,
      email: user?.email,
      password: user?.password,
      phone: user?.phone,
    },
  });

  const onSubmit: SubmitHandler<UserData> = (data) => {
    editUser( data);
    toggleProfileModal()
  };
  return (
    <Modal toggleModal={toggleProfileModal}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fullname">Nome Completo</label>
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

        <button type="submit">Atualizar usuário</button>
      </Form>
    </Modal>
  );
};
