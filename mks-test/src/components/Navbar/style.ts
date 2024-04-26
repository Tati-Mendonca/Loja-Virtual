import styled from "styled-components"

export const Container = styled.header`
    background-color: var(--blue);
    display: flex;
    height: 11vh;
    padding: 15px 30px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`

export const Name = styled.h1`
        color: var(--white);
        font-weight: 700;
      
        span{
            font-weight: 300;
            font-Size: 14px;
            padding: 4px;
        }
`

export const Shop = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 15px;
    background-color: var(--white);
`