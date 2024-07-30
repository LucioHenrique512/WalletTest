import React, {useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import * as S from './styles';
import {MainRouteStackParams} from '../../routes';
import {Header} from '../../components';
import {AnimatedCardList} from './components/cardlist';
import {CardType} from '../../infra/types';

type NavigationProps = NavigationProp<MainRouteStackParams, 'Wallet'>;

const cards: CardType[] = [
  {
    id: '1',
    name: 'Relampago Marquinhos',
    type: 'green',
    number: '1234 1234 1234 1234',
    validThru: '12/24',
    ccv: '123',
  },
  {
    id: '2',
    name: 'Tomate Pistão da Silva',
    type: 'black',
    number: '1234 1234 1234 1234',
    validThru: '12/24',
    ccv: '123',
  },
];

export const WalletScreen: React.FC = () => {
  const {} = useNavigation<NavigationProps>();
  const [selectedCard, setSelectedCard] = useState<{
    index: number;
    card: CardType;
  }>();

  return (
    <S.Container>
      <Header title="Wallet Test" />
      <S.ScreenTitleContainer>
        <S.ScreenTitle>Meus cartões</S.ScreenTitle>
      </S.ScreenTitleContainer>
      <S.ContentContainer>
        <AnimatedCardList
          cards={cards}
          selectedCard={selectedCard}
          onPressCard={data => {
            setSelectedCard(prev =>
              data.card.id === prev?.card.id ? undefined : data,
            );
          }}
        />
      </S.ContentContainer>
    </S.Container>
  );
};
