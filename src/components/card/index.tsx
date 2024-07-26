import React from 'react';
import * as S from './styles';
import {View} from 'react-native';
import {Text} from '../typography';

interface CardProps {
  name: string;
  number: string;
  validThru: string;
  type: 'black' | 'green';
}

export const Card: React.FC<CardProps> = ({name, number, type, validThru}) => {
  const title = type === 'black' ? 'Black Card' : 'Green Card';
  const background = type === 'black' ? 'black' : 'limeGreen';
  const textColor = type === 'black' ? 'white' : 'darkGrey';

  return (
    <S.Container backgroundColor={background}>
      <Text color={textColor} fontSize="md">
        {title}
      </Text>
      <View>
        <S.CardOwnerName color={textColor} fontSize="md">
          {name}
        </S.CardOwnerName>
        <Text color={textColor}>{number}</Text>
        <Text color={textColor}>Validade {validThru}</Text>
      </View>
    </S.Container>
  );
};
