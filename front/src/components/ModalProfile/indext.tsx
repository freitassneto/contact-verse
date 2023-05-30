// import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Modal } from "../Modal";

interface ModalProfileProps {
  toggleProfileModal: () => void;
}

export const ModalProfile = ({ toggleProfileModal }: ModalProfileProps) => {
  const { user } = useAuth();

  console.log(user);

  return (
    <Modal toggleModal={toggleProfileModal}>
      <section>
        <div>
          <h2>Informações do Perfil</h2>
          <h3>Nome completo: {user?.fullname}</h3>
          <h3>Email: {user?.email}</h3>
          <h3>Telefone: {user?.phone}</h3>
        </div>
        <br />
        <div>
          <h2>Lista de Contatos:</h2>
        </div>
      </section>
    </Modal>
  );
};
