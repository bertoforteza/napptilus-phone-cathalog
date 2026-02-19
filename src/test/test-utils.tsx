import React, { type ReactElement } from 'react';
import { render, type RenderOptions } from '@testing-library/react';
import PhonesContext, { PhonesProvider, type PhonesContextType } from '../context/phonesContext';
import { ThemeProvider } from 'styled-components';
import mainTheme from '../styles/mainTheme';
import { GlobalStyles } from '../styles/GlobalStyles';
import userEvent from '@testing-library/user-event';
import type { Phone, PhoneDetails } from '../types/phonesTypes';

interface TestPhonesProviderProps {
  children: React.ReactNode;
  phones?: Phone[];
  phonesChart?: PhoneDetails[];
}

/* eslint-disable react-refresh/only-export-components */
const MockPhonesProvider = ({
  children,
  phones = [],
  phonesChart = [],
}: TestPhonesProviderProps) => {
  const value: PhonesContextType = {
    phones,
    setPhones: vi.fn(),
    phonesChart,
    setPhonesChart: vi.fn(),
  };

  return <PhonesContext.Provider value={value}>{children}</PhonesContext.Provider>;
};

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  phones?: Phone[];
  phonesChart?: PhoneDetails[];
}

const renderWithMockPhonesProvider = (
  ui: ReactElement,
  { phones, phonesChart, ...options }: CustomRenderOptions = {}
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <MockPhonesProvider phones={phones} phonesChart={phonesChart}>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </MockPhonesProvider>
  );

  return render(ui, { wrapper: Wrapper, ...options });
};

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
export { userEvent };
export { renderWithMockPhonesProvider };
