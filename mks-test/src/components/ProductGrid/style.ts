import styled from 'styled-components';

export const ProductGrid__Container = styled.div`
    height: 84vh;
    display: grid;
    grid-template-columns: auto auto auto auto;
    column-gap: 20px;
    align-content: space-evenly;
    justify-content: center;
    place-items: center;

    @media (max-width: 769px) {
        grid-template-columns: auto auto;
        padding: 15px;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;
