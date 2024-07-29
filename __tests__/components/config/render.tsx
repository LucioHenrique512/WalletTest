import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {lightTheme} from '../../../src/themes';
import {render as testRender} from '@testing-library/react-native';

export const render = (component: React.ReactNode) => {
  return testRender(
    <ThemeProvider theme={lightTheme}>{component}</ThemeProvider>,
  );
};
