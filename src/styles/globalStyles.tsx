import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        background-color: rgb(12, 12, 15);
    }
    .deck {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
    }
`;

export default GlobalStyle