import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {render as testRender} from '@testing-library/react-native';
import { lightTheme } from '../../src/themes';

export const render = (component: React.ReactNode) => {
  return testRender(
    <ThemeProvider theme={lightTheme}>{component}</ThemeProvider>,
  );
};