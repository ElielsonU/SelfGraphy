import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --cyan: #5BC0BE;
        --black: #020202;
        --deepblue: #0B132B;
        --white: #FAFAFA;
        --linkblue: #0904FF;
        --gray: #303036;

        font-size: 10px;
    }

    body {
        color: #0B132B;
    }

    * {
        box-sizing: border-box;
        margin: 0;
    }
`