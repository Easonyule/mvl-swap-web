import { PropsWithChildren } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { theme } from './theme';

function ThemeProvider({ children }: PropsWithChildren<{}>) {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}

export default ThemeProvider;
