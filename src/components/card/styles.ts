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
  width: 100%;
  justify-content: space-between;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.darkGrey};
  //opacity: 0.5;
`;

export const CardOwnerName = styled(Text)`
  margin-bottom: ${RFPercentage(1)}px;
`;
