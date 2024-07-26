import React, {PropsWithChildren} from 'react';
import * as S from './styles';

export const ContainerWithSqares: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <S.Container>
      <S.Square />
      {children}
      <S.Square bottom />
    </S.Container>
  );
};
