import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ContactList, Container } from "./styles";
import { Card } from "../../components/Card";
import { ModalAddContact } from "../../components/ModalAddContact";

export interface Contact {
  id: number;
  fullname: string;
  email: string;
  phone: string;
}

export const Dashboard = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await api.get<Contact[]>("contacts");
      setContacts(response.data);
    })();
  }, []);

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  return (
    <Container>
      <header>
        <h1>ContactNet</h1>
        <button type="button" onClick={toggleModal}>
          New
        </button>
      </header>

      {isOpenModal && (
        <ModalAddContact toggleModal={toggleModal} setContacts={setContacts} />
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
