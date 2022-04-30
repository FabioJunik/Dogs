import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    body{
        color: #333;
        --type-first: Helvetica, Arial, sans-serif;
        --type-second: 'Spectral', Georgia;
        font-family: var(--type-first);

    }

    img{
        max-width: 100%;
        display: block;
    }

    button, input{
        display: block;
        font-size: 1rem;
        font-family: var(--type-first);
        color: #333;
    }

    .container{
        max-width: 50rem;
        padding: 0 1rem;
    }
`;