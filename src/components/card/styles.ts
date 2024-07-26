import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {Text} from '../typography';
import {ThemeType} from '../../themes';

const HEIGHT = RFPercentage(25);

type ContainerProps = {
  backgroundColor: keyof ThemeType['colors'];
};

export const Container = styled.View<ContainerProps>`
  background: ${({backgroundColor, theme}) => theme.colors[backgroundColor]};
  padding: ${({theme}) => theme.sizes.commonPadding}px;
  border-radius: ${RFPercentage(2)}px;
  height: ${HEIGHT}px;
  justify-content: space-between;
`;

export const CardOwnerName = styled(Text)`
  margin-bottom: ${RFPercentage(1)}px;
`;
