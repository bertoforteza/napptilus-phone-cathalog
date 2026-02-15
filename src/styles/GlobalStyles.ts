import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.colors.primary};
    color:${props => props.theme.colors.text.primary};
  }

  button {
    font: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input {all: unset;}

  input, select {
    font-family: Helvetica, Arial, sans-serif;
  }
`;
