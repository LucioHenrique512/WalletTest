import React, {useEffect} from 'react';
import * as S from './styles';
import {ContainerWithSqares} from '../../components';
import WalletIcon from '../../assets/wallet.svg';
import {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {useAppContext} from '../../context';
import {getCards} from '../../infra/api';
import {Alert} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainRouteStackParams} from '../../routes';

type NavigationProps = NavigationProp<MainRouteStackParams, 'Loading'>;

export const LoadingScreen: React.FC = () => {
  const {cards, setCards} = useAppContext();
  const {navigate, reset} = useNavigation<NavigationProps>();

  const animatedValue = useSharedValue(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await getCards();
        setCards(data);
        reset({
          index: 0,
          routes: [{name: 'Home'}, {name: 'Wallet'}],
        });
      } catch (error) {
        Alert.alert('Ops!', 'Ocorreu um erro ao buscar os cartões', [
          {
            text: 'Voltar pra home',
            style: 'destructive',
            onPress: () => {
              navigate('Home');
            },
          },
        ]);
      }
    };
    if (cards.length === 0) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    animatedValue.value = withRepeat(
      withTiming(1, {duration: 1500}),
      -1,
      false,
      () => {},
      ReduceMotion.System,
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${animatedValue.value * 360}deg`}],
  }));

  return (
    <ContainerWithSqares>
      <S.Content>
        <S.LoadingContainer style={animatedStyle}>
          <WalletIcon />
        </S.LoadingContainer>
      </S.Content>
    </ContainerWithSqares>
  );
};
