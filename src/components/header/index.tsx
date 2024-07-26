import React from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {useTheme} from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  title: string;
  richtComponent?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({richtComponent, title}) => {
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
    <S.Container style={shadowProps}>
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
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
