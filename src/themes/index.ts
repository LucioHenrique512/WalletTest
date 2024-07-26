import {RFPercentage} from 'react-native-responsive-fontsize';

export const lightTheme = {
  sizes: {
    commonPadding: RFPercentage(2.8),

    fontSize: {
      xs: RFPercentage(1.5),
      sm: RFPercentage(1.8),
      md: RFPercentage(2.5),
      lg: RFPercentage(3),
    },
  },
  colors: {
    darkBlue: '#142995',
    white: '#FFFFFF',
    skyblue: '#12C2E9',
    lightGrey: '#EEEEEE',
    grey: '#BBBBBB',
    darkGrey: '#3F3F3F',
    black: '#000000',
    limeGreen: '#A5FF32',
  },
};

export type ThemeType = typeof lightTheme;
