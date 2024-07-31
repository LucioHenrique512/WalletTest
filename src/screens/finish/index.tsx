import React from 'react';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import {
  Button,
  Card,
  ContainerWithSqares,
  Header,
  Spacing,
  Text,
} from '../../components';
import {MainRouteStackParams} from '../../routes';
import * as S from './styles';
import {RFPercentage} from 'react-native-responsive-fontsize';

type NavigationProps = NavigationProp<MainRouteStackParams, 'Finish'>;
type RouteProps = RouteProp<MainRouteStackParams, 'Finish'>;

export const FinishScreen: React.FC = () => {
  const {navigate} = useNavigation<NavigationProps>();
  const {params} = useRoute<RouteProps>();

  const {card} = params;

  return (
    <ContainerWithSqares>
      <Header title="Cadastro" transparent />
      <S.Content>
        <Text textCenter fontSize="lg" color="white">
          Wallet Test
        </Text>
        <Spacing />
        <Text textCenter fontSize="md" color="white">
          Cartão cadastrado com sucesso!
        </Text>
        <Spacing size={RFPercentage(4)} />
        <Card
          name={card.name}
          number={card.number}
          validThru={card.validThru}
          type={card.type}
        />
        <Spacing size={RFPercentage(4)} />
        <Button
          text="Avançar"
          variant="secondary"
          onPress={() => navigate('Loading')}
        />
      </S.Content>
    </ContainerWithSqares>
  );
};
