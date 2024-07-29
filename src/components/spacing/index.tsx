import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface SpacingProps {
  size?: number;
}

export const Spacing = styled.View<SpacingProps>`
  height: ${({size}) => (size ? size : RFPercentage(2))}px;
`;
