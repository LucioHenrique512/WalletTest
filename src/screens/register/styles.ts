import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  padding: ${({theme}) => theme.sizes.commonPadding}px;
  justify-content: center;
  flex: 1;
`;

export const FormContainer = styled.View``;

export const Row = styled.View`
  flex-direction: row;
`;

export const Cell = styled.View`
  flex: 1;
`;

export const CameraIcon = styled.View`
  background: ${({theme}) => theme.colors.skyblue};
  border-radius: 100px;
  height: ${RFPercentage(4.2)}px;
  width: ${RFPercentage(4.2)}px;
  justify-content: center;
  align-items: center;
`;
