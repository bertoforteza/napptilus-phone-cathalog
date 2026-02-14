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
    background-color: #ffffff;
    color: #000000;
  }

  button {
    font-family: Helvetica, Arial, sans-serif;
    cursor: pointer;
    border: none;
    background: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, select {
    font-family: Helvetica, Arial, sans-serif;
  }

  #root {
    min-height: 100vh;
  }
`;

export const theme = {
  colors: {
    primary: '#000000',
    secondary: '#ffffff',
    accent: '#f5f5f5',
    border: '#e5e5e5',
    text: {
      primary: '#000000',
      secondary: '#666666',
      disabled: '#999999',
    },
    error: '#d32f2f',
    success: '#4caf50',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  typography: {
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '24px',
      xxl: '32px',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.12)',
    md: '0 2px 6px rgba(0, 0, 0, 0.12)',
    lg: '0 4px 12px rgba(0, 0, 0, 0.12)',
  },
  transitions: {
    fast: '0.15s ease-in-out',
    normal: '0.3s ease-in-out',
    slow: '0.5s ease-in-out',
  },
};

export type Theme = typeof theme;
