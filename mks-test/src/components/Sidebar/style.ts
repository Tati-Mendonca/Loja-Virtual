import styled from "styled-components"

export const Sidebar__Container = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 30vw;
background-color: var(--blue);
right: 0;
position: absolute;
-webkit-box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .50) !important;

.total__price p{
    position: absolute;
    bottom: 7.188rem;
    color: var(--white);
    padding: 0 1.875rem;
    font-size: 1.375rem;
}
.total__price span{
    position: absolute;
    bottom: 7.188rem;
    right: 1.875rem;
    color: var(--white);
    font-size: 1.375rem;
}

@media (max-width: 1024px) {   
    width: 50vw;
    .total__price p, span{
        padding: 2.25rem 1.875rem;
    }
}

@media (max-width: 769px) {
    .total__price p, span{
        padding: 0 1.875rem;
    }
}

@media (max-width: 480px) {
    width: 100vw;
    height: 90vh;
    .total__price p{
        padding: 0 1.875rem; 
    }
} 
`;

/* display: flex;
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
} */

/* 
@media (max-width: 1024px) {
 width: 35rem;
 left: 45.22vw;
 .total__price{
    gap: 17vh;
    background-color: aqua;
 }
}

@media (max-width: 769px) {
 width: 24rem;
 height: 80vh;
 left: 50vw;
 .total__price{
    gap: 17vh;

 }
} */
