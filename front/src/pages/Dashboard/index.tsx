import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface Contact {
  id: number;
  fullname: string;
  email: string;
  phone: string;
}

export const Dashboard = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    (async () => {
      const response = await api.get<Contact[]>("contacts");
      setContacts(response.data);
    })();
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <h3>{contact.fullname}</h3>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
