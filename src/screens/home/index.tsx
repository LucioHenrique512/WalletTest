import React from 'react';

import * as S from './styles';
import {
  Button,
  ContainerWithSqares,
  Header,
  Spacing,
  Text,
} from '../../components';

export const HomeScreen: React.FC = () => {
  return (
    <ContainerWithSqares>
      <S.Container>
        <Text textCenter fontSize="lg" color="white">
          Wallet Test
        </Text>
        <Spacing />
        <Button text="Meus cartões" variant="primary" onPress={() => {}} />
        <Spacing />
        <Button
          text="Cadastrar cartão"
          variant="secondary"
          onPress={() => {}}
        />
      </S.Container>
    </ContainerWithSqares>
  );
};
