import styled from 'styled-components';

export const ProductCard__Container = styled.div`
    -webkit-box-shadow: 0 0rem 1rem rgba(0, 0, 0, 0.25) !important;
    width: 180px;
    height: 230px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-color: var(--white);

    img {
        padding: 5px;
        max-height: 140px;
        max-height: 125.5px;
    }

    ol{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    li {
        padding: 0 10px 5px 10px;
        font-weight: 500;
        font-size: 13px;
        list-style: none;
    }

    li span{
        padding: 0.55em;
        background-color: var(--grey-price);
        border-radius: 5px;
        color: var(--white);
        font-weight: 600;
     }

    .boxCard p{
        padding: 0 10px 5px 10px;
    }

    span {
        font-size: 12px;
        font-weight: 300;
        line-height: 1em;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    button{
        border: none;
        margin-top: 2px;
        color: var(--white);
        background-color: var(--blue);
        padding: 5px;
        width: 100%;
        border-radius: 0 0 10px 10px;
        cursor: pointer;
    }

    @media (max-width: 769px) {
        margin-bottom: 15px;
    }

`;
