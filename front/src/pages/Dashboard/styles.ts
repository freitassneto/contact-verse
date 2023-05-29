import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  header {
    background-color: var(--color-green);
    display: flex;
    justify-content: space-between;
  }
`;

export const ContactList = styled.ul`
  margin: 0 auto;
  width: 80%;
  list-style: none;
  padding-top: 2rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;
