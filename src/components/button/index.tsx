import React from 'react';
import * as S from './styles';
import {ButtonProps, ButtonVariants} from './types';
import {ActivityIndicator} from 'react-native';
import {Text} from '../typography';
import {ThemeType} from '../../themes';

export const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  disabled,
  variant,
  loading,
}) => {
  const isDisabled = disabled || loading;

  const colors = getButtonColors(isDisabled, variant);

  return (
    <S.Container
      testID={'button'}
      background={colors.background}
      onPress={() => onPress && onPress()}
      disabled={isDisabled}>
      {loading ? (
        <ActivityIndicator testID="activity-indicator" />
      ) : (
        <Text color={colors.color} fontSize="md">
          {text}
        </Text>
      )}
    </S.Container>
  );
};

const getButtonColors = (
  disabled?: boolean,
  variant?: ButtonVariants,
): {
  background: keyof ThemeType['colors'];
  color: keyof ThemeType['colors'];
} => {
  if (disabled) {
    return {
      background: 'lightGrey',
      color: 'darkGrey',
    };
  } else if (variant === 'secondary') {
    return {background: 'skyblue', color: 'white'};
  } else {
    return {
      background: 'limeGreen',
      color: 'darkBlue',
    };
  }
};
