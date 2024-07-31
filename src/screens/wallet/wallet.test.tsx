import React, {useEffect} from 'react';
import {fireEvent, waitFor} from '@testing-library/react-native';
import {WalletScreen} from '.';
import {render} from '../../../tests/render';
import {useAppContext} from '../../context';
import {CardType} from '../../infra/types';

const cards = [
  {
    id: '1',
    number: '1234 1234 1234 1234',
    name: 'Relampago Marquinhos',
    validThru: '12/26',
    ccv: '255',
    type: 'black',
  },
  {
    id: '2',
    number: '1234 1234 1234 1234',
    name: 'Tomate Pistão da Silva',
    validThru: '12/26',
    ccv: '255',
    type: 'black',
  },
];

describe('WalletScreen', () => {
  const mockkNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    const useNavigation = require('@react-navigation/native').useNavigation;
    useNavigation.mockReturnValue({navigate: mockkNavigate});
  });

  it('should render the screen title', () => {
    const {getByText} = render(<WalletScreen />);
    const screenTitle = getByText('Meus cartões');

    expect(screenTitle).toBeTruthy();
  });

  it('should render the "plus" button', () => {
    const {getByTestId} = render(<WalletScreen />);
    const plusButton = getByTestId('plus-button');

    expect(plusButton).toBeTruthy();
  });

  it('should navigate to the "Register" screen when the "plus" button is pressed', () => {
    const {getByTestId} = render(<WalletScreen />);
    const plusButton = getByTestId('plus-button');

    fireEvent.press(plusButton);
    expect(mockkNavigate).toHaveBeenCalledWith('Register');
  });

  it('should render message when not have registed cards', () => {
    const {getByText} = render(<WalletScreen />);

    const message = getByText('Você não possui cartões cadastrados');
    expect(message).toBeTruthy();
  });

  describe('when have cards', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    it('should render card component', () => {
      const card = {
        id: '40f32589-7ced-4895-b05d-4b2aaa07a04c',
        number: '1234 1234 1234 1234',
        name: 'Relampago Marquinhos',
        validThru: '12/26',
        ccv: '255',
        type: 'black',
      };

      const TestComponent = () => {
        const {setCards} = useAppContext();
        useEffect(() => {
          setCards([card as CardType]);
        }, []);
        return <WalletScreen />;
      };

      const {getByText, debug} = render(<TestComponent />);

      const cardCompoent = getByText(card.name);
      expect(cardCompoent).toBeTruthy();
    });

    it('should render the "animated button" when a card is selected', () => {
      const TestComponent = () => {
        const {setCards} = useAppContext();
        useEffect(() => {
          setCards(cards as CardType[]);
        }, []);
        return <WalletScreen />;
      };

      const {getByText} = render(<TestComponent />);

      const cardCompoent = getByText(cards[0].name);

      fireEvent.press(cardCompoent);

      waitFor(() => {
        expect(getByText('Pagar com esse cartão')).toBeTruthy();
      });
    });
  });
});
