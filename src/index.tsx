import React from 'react';
import MainRoute from './routes';
import {ThemeProvider} from 'styled-components/native';
import {lightTheme} from './themes';
import {AppContextProvider} from './context';

export const Bootstrap = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <AppContextProvider>
        <MainRoute />
      </AppContextProvider>
    </ThemeProvider>
  );
};
