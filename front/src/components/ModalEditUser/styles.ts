import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  .profileLeftCol {
    width: 70%;

    h2 {
      margin-bottom: 2rem;
    }

    h3 {
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    span {
      font-weight: 400;
    }
  }

  .profileRightCol {
    display: flex;
    flex-direction: column;
    gap: 1rem;

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
