import styled from "styled-components"

export const Container__SidebarBody = styled.div`
padding: 0 1.875rem;
color: var(--white);
text-align:center;

`
export const Container__SidebarBody__Empty = styled.div`
padding: 0 1.875rem;
color: var(--white);
text-align:center;

span{
        font-size: 1.3rem;
    }


@media (max-width: 1024px) {
    background-color: aqua;


    span{
        font-size: 2rem;
    }
}

@media (max-width: 769px) {

}
`
export const Container__SidebarBody__Limit = styled.div`
 height: 57vh;
 overflow: auto;

 @media (max-width: 1024px) {
    height: 63vh;
}

@media (max-width: 767px) {
    height: 53vh;
}

@media (max-width: 480px) {
    height: 54vh;
}
`