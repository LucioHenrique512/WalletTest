import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View<{transparent?: boolean}>`
  height: ${RFPercentage(8)}px;
  background: ${({theme, transparent}) =>
    transparent ? 'transparent' : theme.colors.white};
  justify-content: center;
  position: relative;
  z-index: 10;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.sizes.fontSize.lg}px;
  color: ${({theme}) => theme.colors.darkBlue};
  text-align: center;
`;

export const ButtonsContainer = styled.View`
  flex: 1;
  position: absolute;
  width: 100%;
  padding: 0px ${({theme}) => theme.sizes.commonPadding}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;

export const BackButtonContainer = styled.TouchableOpacity``;

export const RightContainer = styled.View``;
