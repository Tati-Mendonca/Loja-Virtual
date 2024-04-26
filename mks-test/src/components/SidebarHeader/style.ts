import styled from "styled-components"

export const SidebarHeader__Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 30px;
height: 18vh;
color: var(--white);

    h1{
        font-size:24px;
        padding-right: 65px;
    }

    svg{
        margin-top: 2px;
        font-size:26px;
        border-radius: 50%;
        background-color: var(--black);
    }
`