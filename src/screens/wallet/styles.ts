import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ScreenTitleContainer = styled.View`
  background: ${({theme}) => theme.colors.white};
  height: ${RFPercentage(8)}px;
  border-radius: 0px 0px ${RFPercentage(5)}px ${RFPercentage(5)}px;
  justify-content: center;
  align-items: center;
`;

export const ScreenTitle = styled.Text`
  font-size: ${({theme}) => theme.sizes.fontSize.md}px;
  color: ${({theme}) => theme.colors.skyblue};
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: ${({theme}) => theme.sizes.commonPadding}px;
  justify-content: center;
  position: relative;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  width: 100%;
  z-index: 1;
`;
