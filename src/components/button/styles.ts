import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {ThemeType} from '../../themes';

type CommonProps = {
  background: keyof ThemeType['colors'];
};

export const Container = styled.TouchableOpacity<CommonProps>`
  height: ${RFPercentage(7)}px;
  background: ${({theme, background}) => {
    console.log('THENA00 ---->>', theme, 'background', background);
    return theme.colors[background];
  }};
  border-radius: ${({theme}) => theme.sizes.fontSize.xs}px;
  align-items: center;
  justify-content: center;
`;
