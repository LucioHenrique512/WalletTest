import React from 'react';
import MainRoute from './routes';
import {ThemeProvider} from 'styled-components/native';
import {lightTheme} from './themes';

export const Bootstrap = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <MainRoute />
    </ThemeProvider>
  );
};
