import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 10px;
    }

    body {
        color: ${({theme}) => theme.deepblue};
    }

    * {
        font-family: 'Roboto', Arial;
        box-sizing: border-box;
        margin: 0;
    }
`