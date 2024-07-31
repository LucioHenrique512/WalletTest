import React, {PropsWithChildren} from 'react';
import * as S from './styles';

export const ContainerWithSqares: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <S.Container>
      <S.Square testID="square-top" />
      {children}
      <S.Square testID="square-bottom" bottom />
    </S.Container>
  );
};
