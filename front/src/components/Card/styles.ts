import styled from "styled-components";

export const Container = styled.li`
    width: 300px;
    padding: 20px;
    background-color: var(--color-gray-300);
    color: var(--color-gray-900);
    border-radius: 8px;

    div {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    div > svg {
        font-size: 3.0rem;
    }

    div > h3 {
        font-weight: 600;
    }
`