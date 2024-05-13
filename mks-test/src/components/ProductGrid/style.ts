import styled from 'styled-components';

export const ProductGrid__Container = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 84vh;

    aside {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0;
        grid-row-gap: 20px;
        column-gap: 1.25rem;
        place-items: center;
    }

    @media (max-width: 1024px) {
        aside {
            grid-template-columns: auto auto auto;
            place-items: center;
        }
    }

    @media (max-width: 767px) {
    margin-top: 0.85rem;
    height: 100%;
    

        aside {
            grid-template-columns: auto;
            place-items: center;
            grid-row-gap: 0.5rem;
        }
    }

    @media (max-width: 480px) {
      
    } 
`;
