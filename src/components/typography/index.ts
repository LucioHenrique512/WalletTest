import styled from 'styled-components/native';
import {ThemeType} from '../../themes';

type TextProps = {
  fontSize?: keyof ThemeType['sizes']['fontSize'];
  color?: keyof ThemeType['colors'];
};

export const Text = styled.Text<TextProps>`
  font-size: ${({fontSize, theme}) => theme.sizes.fontSize[fontSize ?? 'sm']}px;
  color: ${({color, theme}) => theme.colors[color ?? 'darkGrey']};
`;
