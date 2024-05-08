import styled from "styled-components"

export const Sidebar__Container = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 30vw;
background-color: var(--blue);
position: absolute;
left: 70vw;
overflow-y: hidden;
-webkit-box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .50) !important;

.total__price{
    gap: 33vh;
    padding: 0 30px;
    color: var(--white);
    font-size: 22px;
    bottom: 17vh;
    position: absolute;
    display: flex;
    justify-content: space-between;    
}
`