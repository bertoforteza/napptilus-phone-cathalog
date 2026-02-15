import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      disabled: string;
      border: string;
      text: {
        primary: string;
        secondary: string;
        disabled: string;
        negative: string;
        primaryHover: string;
        secondaryHover: string;
      };
    };
    spacing: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    typography: {
      fontSize: {
        xxs: string;
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        xxl: string;
      };
      fontWeight: {
        light: number;
        normal: number;
        medium: number;
        bold: number;
      };
    };
  }
}
