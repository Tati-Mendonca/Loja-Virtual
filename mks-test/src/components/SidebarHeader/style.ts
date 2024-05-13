import styled from 'styled-components';

export const SidebarHeader__Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.875rem;
    height: 18vh;
    color: var(--white);

    h1 {
        font-size: 1.5rem;
        padding-right: 4rem;
    }

    svg {
        margin-top: 2px;
        font-size: 1.6rem;
        border-radius: 50%;
        background-color: var(--black);
    }

    @media (max-width: 1024px) {
        padding-top: 1.875rem;
        height: 15vh;

        h1 {
            font-size: 2rem;
        }
        svg {
            font-size: 2.5rem;
        }
    }

    @media (max-width: 767px) {
    }

    @media (max-width: 480px) {
        padding: 3.875rem 1.875rem 1.2rem 1.875rem;
        height: 15vh;
        h1 {
            font-size: 1.5rem;
        }
        svg {
            font-size: 2rem;
        }
    }
`;
