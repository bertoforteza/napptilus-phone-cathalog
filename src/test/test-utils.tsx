import React, { type ReactElement } from 'react';
import { render, type RenderOptions } from '@testing-library/react';
import { PhonesProvider } from '../context/phonesContext';
import { ThemeProvider } from 'styled-components';
import mainTheme from '../styles/mainTheme';
import { GlobalStyles } from '../styles/GlobalStyles';

/* eslint-disable react-refresh/only-export-components */
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <PhonesProvider>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </PhonesProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

/* eslint-disable react-refresh/only-export-components */
export * from '@testing-library/react';
export { customRender as render };
