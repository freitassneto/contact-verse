import { useAuth } from "../../hooks/useAuth";
import { Modal } from "../Modal";
import { Container } from "./styles";

interface ModalDeleteUserProps {
  toggleDeleteModal: () => void;
}

export const ModalDeleteUser = ({
  toggleDeleteModal,
}: ModalDeleteUserProps) => {
  const { deleteUser } = useAuth();

  return (
    <Modal toggleModal={toggleDeleteModal}>
      <Container>
        <h2>Tem certeza que quer deletar sua conta?</h2>
        <div className="userButtons">
          <button className="deleteButton" onClick={deleteUser}>
            Quero deletar minha conta
          </button>
          <button onClick={toggleDeleteModal}>
            Não quero deletar minha conta.
          </button>
        </div>
      </Container>
    </Modal>
  );
};
