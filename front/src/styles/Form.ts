import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  > label {
    margin-top: 1rem;
    font-size: 1.8rem;
    font-weight: 400;
    color: var(--color-gray-200);
  }
  > input {
    padding: 0px 16px;
    height: 4rem;

    background-color: var(--color-gray-300);
    border: 1.2px solid var(--color-gray-300);
    border-radius: 4px;

    font-size: 1.6rem;
    font-weight: 400;
    color: var(--color-gray-900);
  }

  > input::placeholder {
    color: var(--color-gray-600);
  }

  > input:focus {
    outline: 1.2px solid var(--color-green);
    background-color: var(--color-white);
  }

  > small {
    color: var(--color-green);
  }

  > button {
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
`;
