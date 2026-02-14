import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from 'styled-components';
import mainTheme from './styles/mainTheme.ts';
import { GlobalStyles } from './styles/GlobalStyles.ts';
import { BrowserRouter } from 'react-router-dom';
import { PhonesProvider } from './context/phonesContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PhonesProvider>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </PhonesProvider>
    </BrowserRouter>
  </StrictMode>
);
