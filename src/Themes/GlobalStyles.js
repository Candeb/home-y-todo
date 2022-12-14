import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body{
        font-family: 'Montserrat', sans-serif;
        background-color: #000000;
        color: #F2F2F2;
    }
`;
