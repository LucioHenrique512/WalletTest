import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  flex: 1;
`;

type SquareProps = {bottom?: boolean};

const getPositionDefinitions = (bottom?: boolean) => {
  const upright = -RFPercentage(26);
  const landscape = -RFPercentage(17);

  if (bottom) {
    return `
      bottom: ${upright}px;
      right: ${landscape}px;
      `;
  }

  return `
      top: ${upright}px;
      left: ${landscape}px;
      `;
};

export const Square = styled.View<SquareProps>`
  background: ${({theme}) => theme.colors.lightGrey}20;
  height: ${RFPercentage(55)}px;
  width: ${RFPercentage(50)}px;
  border-radius: ${RFPercentage(5)}px;
  position: absolute;
  transform: rotate(-124deg);
  ${({bottom}) => getPositionDefinitions(bottom)}
  z-index: -1;
`;
