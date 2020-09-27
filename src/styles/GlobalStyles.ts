import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, button, input {
    font-family: 'Roboto', 'Arial', sans-serif;
    color: var(--color-text);
    outline: 0;
    border: 0;
  }

  html, body, #root {
    height: 100%;
    background-color: var(--color-secondary);
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  :root {
    ${({ theme }) => {
        return Object.entries(theme)
        .map(([prop, value]) => `${prop}: ${value};`)
      }
    }
  }
`;