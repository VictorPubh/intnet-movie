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

    .react-autosuggest__suggestions-container {
        background-color: rgb(20, 20, 20, 0.9);
        color: white;
        z-index: 999;
    }
    .react-autosuggest__input {
        background-color: rgb(40, 40, 40, 0.5);
        color: white;
        border: 0;
        padding: 0.6rem;
        padding-left: 1rem;
        width: 100%;
        outline: none;
    }
    .react-autosuggest__suggestion {
        border-bottom: 1px solid rgb(80, 80, 80);
        cursor: pointer;
        list-style: none;
        padding: 10px;
    }
    .react-autosuggest__suggestions-list {
        padding: 0;
    }

    .suggestion-poster {
        border-radius: 0.2rem;
        width: 5rem;
    }
    .suggestion-title {
        font-size: 11px;
        display: inline;
        margin: 0.8rem;
    }
    .suggestion-wrapper {
        z-index: 999;
        display: flex;
        max-width: 400px;
    }

    a {
        color: rgb(255, 255, 255, 0.95);
        padding: 1.2rem;
        text-align: center;
    }
    a: hover {
        color: rgb(255, 255, 255, 0.75)
    }
`;

export default GlobalStyle