import { Contact } from "../../pages/Dashboard";
import { Container } from "./styles";

interface CardProps {
  contact: Contact;
}

export const Card = ({ contact }: CardProps) => {
  return (
    <Container>
      <h3>{contact.fullname}</h3>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
    </Container>
  );
};
