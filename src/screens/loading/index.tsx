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

export const LoadingScreen: React.FC = () => {
  const animatedValue = useSharedValue(0);


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
