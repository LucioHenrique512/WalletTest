import React from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {useTheme} from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {Text} from '../typography';

interface HeaderProps {
  title: string;
  richtComponent?: React.ReactNode;
  transparent?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  richtComponent,
  title,
  transparent,
}) => {
  const {colors} = useTheme();
  const {goBack} = useNavigation();

  const shadowProps = {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  };

  return (
    <S.Container style={!transparent && shadowProps} transparent={transparent}>
      <S.ButtonsContainer>
        <S.BackButtonContainer onPress={goBack}>
          <Icon
            name="arrow-left"
            size={RFPercentage(3)}
            color={colors.skyblue}
          />
        </S.BackButtonContainer>
        <S.RightContainer>{richtComponent}</S.RightContainer>
      </S.ButtonsContainer>
      <Text
        textCenter
        fontSize="md"
        color={transparent ? 'skyblue' : 'darkBlue'}>
        {title}
      </Text>
    </S.Container>
  );
};
