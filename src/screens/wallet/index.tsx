import React from 'react';

//import * as S from './styles';
import {MainRouteStackParams} from '../../routes';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ContainerWithSqares} from '../../components/container';

type NavigationProps = NavigationProp<MainRouteStackParams, 'Wallet'>;

export const WalletScreen: React.FC = () => {
  const {} = useNavigation<NavigationProps>();

  return <ContainerWithSqares />;
};
