import { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

interface ThemeProps {
  children: ReactNode;
}

export const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
