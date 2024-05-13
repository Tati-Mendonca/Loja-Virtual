import styled from 'styled-components';

export const Container__product = styled.div`
    padding: 15px;
    background-color: var(--white);
    border-radius: 5px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 14px;
    line-height: 1em;
    align-items: center;
    color: var(--black);

    img {
        width: 50px;
        padding-right: 10px;
    }
    .product__description {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 150px;
    }
    .amount-item {
        font-size: 8px;
        font-weight: 500;
    }
    .btn-item {
        border: 1px var(--shadown) solid;
        padding: 1px 9px;
        border-radius: 3px;
        font-size: 10px;

        button {
            border: none;
            background-color: var(--white);
            font-size: 10px;
            padding:2.5px ;

        }

        span {
            padding: 0 4px;
        }
    }

    .amount {
        display: flex;
        flex-direction: column;
        margin-top: -13px;
        align-items: flex-start;
        font-size: 12px;
    }

    .product__price {
        display: flex;
        align-items: center;
        padding-right: 10px;
        width: 140px;
        justify-content: space-between;
    }

    .price-item {
        font-weight: 700;
        font-size: 1em;
    }
`;
