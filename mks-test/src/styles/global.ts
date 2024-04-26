import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
:root {
    --blue: #0F52BA;
    --black: #000000;
    --white: #FFFFFF;
    --grey: #EEEEEE;
  }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        font-family:  'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
  
`
