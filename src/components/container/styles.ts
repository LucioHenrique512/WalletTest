import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  flex: 1;
`;

type SquareProps = {bottom?: boolean};

const getPositionDefinitions = (bottom?: boolean) => {
  if (bottom) {
    return `
      bottom: ${-RFPercentage(23)}px;
      right: ${-RFPercentage(17)}px;
      `;
  }

  return `
      top: ${-RFPercentage(23)}px;
      left: ${-RFPercentage(17)}px;
      `;
};

export const Square = styled.View<SquareProps>`
  background: ${({theme}) => theme.colors.lightGrey}30;
  height: ${RFPercentage(55)}px;
  width: ${RFPercentage(50)}px;
  border-radius: ${RFPercentage(5)}px;
  position: absolute;
  transform: rotate(-124deg);
  ${({bottom}) => getPositionDefinitions(bottom)}
`;
