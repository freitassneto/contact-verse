import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  header {
    background-color: var(--color-blue-700);
    display: flex;
    justify-content: space-around;
  }
`;

export const ContactList = styled.ul`
  background-color: var(--color-blue-400);
  height: 100vh;
  width: 300px;
  list-style: none;
`;
