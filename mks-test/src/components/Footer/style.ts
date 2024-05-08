import styled from 'styled-components';

export const MainFooter = styled.footer`
    background-color: var(--grey);
    display: flex;
    padding: 10px 30px;
    height: 5vh;
    font-size: 0.85rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    a{
        text-decoration: none;
        color: var(--black);
    }

    @media (max-width: 769px) {
        margin-top: 24rem;
    }
    @media (max-width: 480px) {
        font-size: 0.70rem;
    }
`;
