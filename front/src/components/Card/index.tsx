import { Contact } from "../../pages/Dashboard";
import { Container } from "./styles";
import { IoMdContact } from "react-icons/io";
import { IoMailOpen } from "react-icons/io5";
import { AiFillPhone } from "react-icons/ai";

interface CardProps {
  contact: Contact;
}

export const Card = ({ contact }: CardProps) => {
  return (
    <Container>
      <h3><IoMdContact />{contact.fullname}</h3>
      <p><IoMailOpen />{contact.email}</p>
      <p><AiFillPhone />{contact.phone}</p>
    </Container>
  );
};
