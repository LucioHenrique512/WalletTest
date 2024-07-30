import React, {useEffect} from 'react';
import {Button} from '../../../components';
import {CardData} from './cardlist';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';

export const AnimatedButton: React.FC = ({}) => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withDelay(400, withSpring(1));
    console.log('opacity', opacity.value);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Button text="Pagar com esse cartão" variant="secondary" />
    </Animated.View>
  );
};
