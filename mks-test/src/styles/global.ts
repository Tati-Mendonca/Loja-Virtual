import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --blue: #0F52BA;
    --black: #000000;
    --white: #FFFFFF;
    --grey: #EEEEEE;
    --grey-price: #373737;
  }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        font-family: "Montserrat", sans-serif;
    }

    li{
        list-style: none;
    }


`;
