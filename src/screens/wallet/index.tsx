import React, {useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import * as S from './styles';
import {MainRouteStackParams} from '../../routes';
import {Button, Header} from '../../components';
import {AnimatedCardList} from './components/cardlist';
import {CardType} from '../../infra/types';
import {useAppContext} from '../../context';
import {AnimatedButton} from './components/animatedButton';
import {Pressable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useTheme} from 'styled-components/native';
import {RFPercentage} from 'react-native-responsive-fontsize';

type NavigationProps = NavigationProp<MainRouteStackParams, 'Wallet'>;

export const WalletScreen: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<{
    index: number;
    card: CardType;
  }>();

  const {navigate} = useNavigation<NavigationProps>();

  const {colors} = useTheme();

  const {cards} = useAppContext();

  return (
    <S.Container>
      <Header
        title="Wallet Test"
        rightComponent={
          <TouchableOpacity
            onPress={() => {
              navigate('Register');
            }}>
            <Icon name="plus" size={RFPercentage(3.5)} color={colors.skyblue} />
          </TouchableOpacity>
        }
      />
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
        {selectedCard && (
          <S.ButtonContainer>
            <AnimatedButton />
          </S.ButtonContainer>
        )}
      </S.ContentContainer>
    </S.Container>
  );
};
