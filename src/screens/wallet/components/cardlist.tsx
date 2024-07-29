import React, {useEffect} from 'react';
import {CardType} from '../../../services/types';
import styled from 'styled-components/native';
import {RFPercentage} from 'react-native-responsive-fontsize';

import {AnimatedCard} from './animatedCard';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export type CardData = {index: number; card: CardType};

interface AnimatedCardListProps {
  cards: CardType[];
  selectedCard?: CardData;
  onPressCard: (data: CardData) => void;
}

export const AnimatedCardList: React.FC<AnimatedCardListProps> = ({
  cards,
  onPressCard,
  selectedCard,
}) => {
  const animatedValue = useSharedValue(0);

  useEffect(() => {
    if (selectedCard) {
      animatedValue.value = withTiming(1);
    } else {
      animatedValue.value = withTiming(0);
    }
  }, [selectedCard, animatedValue]);

  const initialContainerTranslateY = RFPercentage(-6);

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    height: `${interpolate(animatedValue.value, [0, 1], [50, 100])}%`,
    transform: [
      {
        translateY: interpolate(
          animatedValue.value,
          [0, 1],
          [initialContainerTranslateY, 0],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }));

  return (
    <Container style={containerAnimatedStyle}>
      {cards.map((data, index) => {
        const initialY = index * -RFPercentage(15);

        return (
          <AnimatedCard
            key={data.id}
            data={data}
            index={index}
            initialY={initialY}
            selectedIndex={selectedCard?.index}
            onPressCard={() => {
              onPressCard({index, card: data});
            }}
          />
        );
      })}
    </Container>
  );
};

const Container = styled(Animated.View)`
  position: relative;
`;
