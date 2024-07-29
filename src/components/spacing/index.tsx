import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface SpacingProps {
  size?: number;
  vertical?: boolean;
}

const getSize = (size?: number) => (size ? size : RFPercentage(2));

export const Spacing = styled.View<SpacingProps>`
  ${({vertical, size}) =>
    `${vertical ? 'width' : 'height'}:${getSize(size)}px;`}
`;
