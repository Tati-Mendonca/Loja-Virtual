import styled from "styled-components"

export const SidebarFotter = styled.div`
background-color: var(--black);
bottom: 0;
position: absolute;
width: 100%;
height: 13vh;
display: flex;
justify-content: center;

button{
    color: var(--white);
    background: transparent;
    border: none;
    font-weight: 700;
    font-size: 23px;
}

@media (max-width: 1024px) {
    height: 10vh;
}

@media (max-width: 769px) {

}
`