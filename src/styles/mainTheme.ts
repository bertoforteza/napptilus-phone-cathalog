import type { DefaultTheme } from 'styled-components';

const mainTheme: DefaultTheme = {
  colors: {
    primary: '#fff',
    secondary: '#000',
    disabled: '#ccc',
    border: '#000',
    text: {
      primary: '#000000',
      secondary: '#aaa',
      disabled: '#999',
      negative: '#df0000',
    },
  },
  spacing: {
    xs: '0.25rem',
    s: '0.5rem',
    m: '1rem',
    l: '1.5rem',
    xl: '1.75rem',
    xxl: '2rem',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '834px',
    desktop: '1024px',
  },
  typography: {
    fontSize: {
      xs: '0.75rem',
      s: '0.875rem',
      m: '1rem',
      l: '1.125rem',
      xl: '1.5rem',
      xxl: '2rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
};

export default mainTheme;
