import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import styled from 'styled-components/native';
import {CardData} from './cardlist';
import {CardType} from '../../../infra/types';
import {Card} from '../../../components';
import {RFPercentage} from 'react-native-responsive-fontsize';

interface AnimatedCardProps {
  data: CardType;
  index: number;
  initialY: number;
  onPressCard: (data: CardData) => void;
  selectedIndex?: number;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  data,
  index,
  onPressCard,
  selectedIndex,
  initialY,
}) => {
  const cardHeight = RFPercentage(25);
  const unSelectedTranslateY = RFPercentage(65);

  const animtaedTranslateY = useSharedValue(initialY);

  useEffect(() => {
    if (selectedIndex === undefined) {
      animtaedTranslateY.value = withTiming(initialY);
    } else if (selectedIndex === index) {
      animtaedTranslateY.value = withTiming(0 - index * cardHeight);
    } else {
      animtaedTranslateY.value = withTiming(
        index === 0
          ? unSelectedTranslateY
          : unSelectedTranslateY - cardHeight * index,
      );
    }
  }, [
    selectedIndex,
    animtaedTranslateY,
    index,
    cardHeight,
    unSelectedTranslateY,
    initialY,
  ]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: animtaedTranslateY.value,
      },
    ],
  }));

  return (
    <CardContainer
      testID={`animated-card-container-${data.id}`}
      style={animatedStyle}>
      <Card
        onPress={() => {
          onPressCard({index, card: data});
        }}
        name={data.name}
        type={data.type}
        number={data.number}
        validThru={data.validThru}
      />
    </CardContainer>
  );
};

const CardContainer = styled(Animated.View)`
  width: 100%;
`;
