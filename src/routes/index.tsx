import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, RegisterScreen, WalletScreen} from '../screens';
import {useTheme} from 'styled-components/native';

export type MainRouteStackParams = {
  Wallet: undefined;
  Home: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<MainRouteStackParams>();

const MainRoute: React.FC = () => {
  const {colors} = useTheme();

  const NavigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.darkBlue,
    },
  };

  return (
    <NavigationContainer theme={NavigationTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoute;
