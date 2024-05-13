import styled from 'styled-components';

export const MainFooter = styled.footer`
    background-color: var(--grey);
    display: flex;
    height: 5vh;
    font-size: 0.85rem;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
        color: var(--black);
    }

    @media (max-width: 1024px) {
    }

    @media (max-width: 769px) {
       
    }

    @media (max-width: 480px) {
    }

    /* background-color: var(--grey);
    display: flex;
    padding: 10px 30px;
    height: 5vh;
    font-size: 0.85rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    bottom: 0;
    position: absolute;
    width: 100%;

    a{
        text-decoration: none;
        color: var(--black);
    }

    @media (max-width: 1024px) {
        bottom: 0;
    }

    @media (max-width: 769px) {
    bottom: -12.8rem;
        /* margin-top: 14vh; */
    /* }
    @media (max-width: 480px) {
        font-size: 0.70rem;
        text-align: center;
    } */
`;
