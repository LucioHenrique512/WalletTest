import React from 'react';

import * as S from './styles';
import {
  Button,
  ContainerWithSqares,
  Header,
  Spacing,
  Text,
} from '../../components';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainRouteStackParams} from '../../routes';

type NavigationProps = NavigationProp<MainRouteStackParams, 'Home'>;

export const HomeScreen: React.FC = () => {
  const {navigate} = useNavigation<NavigationProps>();

  return (
    <ContainerWithSqares>
      <S.Container>
        <Text textCenter fontSize="lg" color="white">
          Wallet Test
        </Text>
        <Spacing />
        <Button
          text="Meus cartões"
          variant="primary"
          onPress={() => {
            navigate('Wallet');
          }}
        />
        <Spacing />
        <Button
          text="Cadastrar cartão"
          variant="secondary"
          onPress={() => {
            navigate('Register');
          }}
        />
      </S.Container>
    </ContainerWithSqares>
  );
};
