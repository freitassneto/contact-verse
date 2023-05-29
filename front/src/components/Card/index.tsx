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
      <div>
        <IoMdContact />
        <h3>{contact.fullname}</h3>
      </div>
      <div>
        <IoMailOpen />
        <p>{contact.email}</p>
      </div>
      <div>
        <AiFillPhone />
        <p>{contact.phone}</p>
      </div>
    </Container>
  );
};
