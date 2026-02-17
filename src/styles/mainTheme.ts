import type { DefaultTheme } from 'styled-components';

const mainTheme: DefaultTheme = {
  colors: {
    primary: '#fff',
    secondary: '#000',
    disabled: '#ccc',
    border: '#000',
    text: {
      primary: '#000',
      secondary: '#79736d',
      disabled: '#c2bfbc',
      negative: '#df0000',
      primaryHover: '#fff',
      secondaryHover: '#ccc',
      placeholder: '#aaa',
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
      xxs: '0.625rem',
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
  button: {
    backgroundPrimary: '#000',
    backgroundHover: '#282624',
    backgroundActive: '#363331',
    backgroundDisabled: '#f3f2f2',
    textPrimary: '#fff',
    textDisabled: '#c2bfbc',
    textOutlined: '#000',
    textOutlinedHover: '#504D49',
    borderOutlined: '#1B1A18',
    borderOutlinedHover: '#1b1a18',
    borderOutlinedActive: '#363331',
    borderOutlinedDisabled: '#dbd9d7',
  },
};

export default mainTheme;
