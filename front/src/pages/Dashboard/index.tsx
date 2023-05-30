import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ContactList, Container } from "./styles";
import { Card } from "../../components/Card";
import { ModalAddContact } from "../../components/ModalAddContact";
import { HiUserAdd } from "react-icons/hi";
import headerLogo from "../../assets/logo-header-contactverse.png";
import { ImProfile } from "react-icons/im";
import { TbLogout } from "react-icons/tb";
import { useAuth } from "../../hooks/useAuth";
import { ModalProfile } from "../../components/ModalProfile/indext";

export interface Contact {
  id: number;
  fullname: string;
  email: string;
  phone: string;
}

export interface UserData {
  id: number;
  fullname: string;
  email: string;
  phone: string;
  contacts: Contact[] | [] | undefined;
}

export const Dashboard = () => {
  const { logout } = useAuth();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenProfileModal, setIsOpenProfileModal] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await api.get<Contact[]>("contacts");
      setContacts(response.data);
    })();
  }, []);

  const toggleModal = () => setIsOpenModal(!isOpenModal);
  const toggleProfileModal = () => setIsOpenProfileModal(!isOpenProfileModal);

  return (
    <Container>
      <header>
        <div>
          <img src={headerLogo} alt="" />
        </div>
        <div>
          <button type="button" onClick={toggleModal}>
            <HiUserAdd />
          </button>
          <button type="button" onClick={toggleProfileModal}>
            <ImProfile />
          </button>
          <button type="button" onClick={logout}>
            <TbLogout />
          </button>
        </div>
      </header>

      {isOpenModal && (
        <ModalAddContact toggleModal={toggleModal} setContacts={setContacts} />
      )}
      {isOpenProfileModal && (
        <ModalProfile toggleProfileModal={toggleProfileModal} />
      )}

      <main>
        <ContactList>
          {contacts.map((contact) => (
            <Card key={contact.id} contact={contact} />
          ))}
        </ContactList>
      </main>
    </Container>
  );
};
