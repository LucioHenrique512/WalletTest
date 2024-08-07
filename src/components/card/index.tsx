import React from 'react';
import * as S from './styles';
import {View, Pressable} from 'react-native';
import {Text} from '../typography';
import {Spacing} from '../spacing';
import {RFPercentage} from 'react-native-responsive-fontsize';
import { obfuscateCardNumber } from '../../utils/textutils';

interface CardProps {
  name: string;
  number: string;
  validThru: string;
  type: 'black' | 'green';
  onPress?: () => void;
}

export const Card: React.FC<CardProps> = ({
  name,
  number,
  type,
  validThru,
  onPress,
}) => {
  const title = type === 'black' ? 'Black Card' : 'Green Card';
  const background = type === 'black' ? 'black' : 'limeGreen';
  const textColor = type === 'black' ? 'white' : 'darkGrey';

  return (
    <Pressable testID="card-pressable" onPress={() => onPress && onPress()}>
      <S.Container backgroundColor={background}>
        <Text color={textColor} fontSize="md">
          {title}
        </Text>
        <View>
          <S.CardOwnerName color={textColor} fontSize="md">
            {name}
          </S.CardOwnerName>
          <Text color={textColor}>{obfuscateCardNumber(number)}</Text>
          <Spacing size={RFPercentage(0.5)} />
          <Text color={textColor}>Validade {validThru}</Text>
        </View>
      </S.Container>
    </Pressable>
  );
};
