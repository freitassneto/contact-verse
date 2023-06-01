import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { CreateContactData, schema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { Contact } from "../../pages/Dashboard";
import { Modal } from "../Modal";
import { Form } from "../../styles/Form";

interface ModalAddContactProps {
  toggleModal: () => void;
  setContacts: Dispatch<SetStateAction<Contact[]>>;
}

export const ModalAddContact = ({toggleModal,setContacts}: ModalAddContactProps) => {
  const { register, handleSubmit } = useForm<CreateContactData>({
    resolver: zodResolver(schema),
  });

  const createContact = async (data: CreateContactData) => {
    const response = await api.post<Contact>("/contacts", { ...data });
    setContacts((previousContacts) => [response.data, ...previousContacts]);

    toggleModal();
  };

  return (
    <Modal toggleModal={toggleModal}>
      <Form onSubmit={handleSubmit(createContact)}>
        <h2>Adicionar novo contato</h2>
        <label htmlFor="fullname">Nome Completo</label>
        <input type="text" id="fullname" {...register("fullname")} />

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="phone">Telefone</label>
        <input type="text" id="phone" {...register("phone")} />

        <button type="submit">Registrar contato</button>
      </Form>
    </Modal>
  );
};
