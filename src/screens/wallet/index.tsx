import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import * as S from './styles';
import {MainRouteStackParams} from '../../routes';
import {Card, Header} from '../../components';

type NavigationProps = NavigationProp<MainRouteStackParams, 'Wallet'>;

export const WalletScreen: React.FC = () => {
  const {} = useNavigation<NavigationProps>();

  return (
    <S.Container>
      <Header title="Wallet Test" />
      <S.ScreenTitleContainer>
        <S.ScreenTitle>Meus cartões</S.ScreenTitle>
      </S.ScreenTitleContainer>
      <S.ContentContainer>
        <Card
          name="Relampago Marquinhos"
          type="black"
          number="1234 1234 1234 1234"
          validThru="12/24"
        />
        <Card
          name="Relampago Marquinhos"
          type="green"
          number="1234 1234 1234 1234"
          validThru="12/24"
        />
      </S.ContentContainer>
    </S.Container>
  );
};
