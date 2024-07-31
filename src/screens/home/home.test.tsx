import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {HomeScreen} from '.';
import { render } from '../../../tests/render';

describe('HomeScreen', () => {
  const mockkNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    const useNavigation = require('@react-navigation/native').useNavigation;
    useNavigation.mockReturnValue({navigate: mockkNavigate});
  });

  it('should render the component correctly', () => {
    const {getByText} = render(<HomeScreen />);

    expect(getByText('Wallet Test')).toBeTruthy();
    expect(getByText('Meus cartões')).toBeTruthy();
    expect(getByText('Cadastrar cartão')).toBeTruthy();
  });

  it('should navigate to "Wallet" screen when "Meus cartões" button is pressed', () => {
    const {getByText} = render(<HomeScreen />);
    const button = getByText('Meus cartões');

    fireEvent.press(button);
    expect(mockkNavigate).toHaveBeenCalledWith('Loading');
  });

  it('should navigate to "Register" screen when "Cadastrar cartão" button is pressed', () => {
    const {getByText} = render(<HomeScreen />);
    const button = getByText('Cadastrar cartão');

    fireEvent.press(button);
    expect(mockkNavigate).toHaveBeenCalledWith('Register');
  });
});
