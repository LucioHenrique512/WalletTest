import React from 'react';
import {FinishScreen} from '.';
import {render} from '../../utils/testUtils';
import { fireEvent } from '@testing-library/react-native';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn().mockReturnValue({navigate: jest.fn()}),
  useRoute: jest.fn().mockReturnValue({
    params: {
      card: {
        name: 'John Doe',
        number: '1234 5678  9012 3456',
        validThru: '12/24',
        type: 'black',
      },
    },
  }),
}));

describe('FinishScreen component', () => {
  it('renders the FinishScreen component correctly', () => {
    const card = {
      name: 'John Doe',
      number: '1234 5678 9012 3456',
      validThru: '12/24',
      type: 'Visa',
    };

    const {getByText} = render(<FinishScreen />);

    const titleElement = getByText('Wallet Test');
    const successMessageElement = getByText('Cartão cadastrado com sucesso!');
    const cardElement = getByText(card.number);
    const buttonElement = getByText('Avançar');

    expect(titleElement).toBeDefined();
    expect(successMessageElement).toBeDefined();
    expect(cardElement).toBeDefined();
    expect(buttonElement).toBeDefined();
  });

  it('navigates to the Loading screen when the button is pressed', () => {
    const navigate = jest.fn();
    const useNavigationMock = jest.spyOn(
      require('@react-navigation/native'),
      'useNavigation',
    );
    useNavigationMock.mockReturnValue({navigate});

    const {getByText} = render(<FinishScreen />);

    const buttonElement = getByText('Avançar');
    fireEvent.press(buttonElement);

    expect(navigate).toHaveBeenCalledWith('Loading');
  });
});
