import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;

  section {
    border-top: 2px solid var(--color-green);

    h2 {
      margin-top: 1rem;
    }
  }
`;

export const DashHeader = styled.header`
  background-color: var(--color-green);
  section {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const UserInfo = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  span {
    font-weight: 400;
  }

  .userButtons {
    display: flex;
    gap: 2rem;

    button {
      margin-top: 20px;
      padding: 0px 40px;
      height: 40px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1.6rem;
      font-weight: 600;
      color: var(--color-gray-900);
      background: var(--color-green);

      transition: 0.5s ease;
    }

    button:hover {
      transition: 0.5s ease;
      color: var(--color-green);
      background: var(--color-gray-900);
      border: 2px solid var(--color-green);
    }

    .deleteButton {
      color: var(--color-white);
      background: var(--color-red);
    }

    .deleteButton:hover {
      background-color: transparent;
      border: 2px solid var(--color-red);
    }
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
