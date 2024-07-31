import React from 'react';
import {fireEvent, waitFor} from '@testing-library/react-native';
import {RegisterScreen} from '.';
import {render} from '../../../tests/render';
import {postCard} from '../../infra/api';
import {useNavigation} from '@react-navigation/native';
import {delay} from '../../utils/commonutils';
import {Alert} from 'react-native';

jest.mock('../../infra/api');
jest.mock('@react-navigation/native');
jest.mock('../../utils/commonutils', () => ({
  delay: jest.fn(),
}));

jest.mock('react-native-text-input-mask', () => {
  return {
    __esModule: true,
    default: jest.fn(() => {
      const {View} = require('react-native');
      return <View testID="text-field-mask" />;
    }),
  };
});

const mockAlert = jest.fn();

Alert.alert = mockAlert;

describe('RegisterScreen', () => {
  const mockReset = jest.fn();

  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllMocks();
    const useNavigation = require('@react-navigation/native').useNavigation;
    useNavigation.mockReturnValue({reset: mockReset});
  });

  it('should render the component', () => {
    const {getByText, getByLabelText} = render(<RegisterScreen />);
    const numberInput = getByLabelText('Numero do cartão');
    const nameInput = getByLabelText('Nome do titular');
    const validThruInput = getByLabelText('vencimento');
    const cvvInput = getByLabelText('código de segurança');
    const sendButton = getByText('Enviar');

    expect(numberInput).toBeTruthy();
    expect(nameInput).toBeTruthy();
    expect(validThruInput).toBeTruthy();
    expect(cvvInput).toBeTruthy();
    expect(sendButton).toBeTruthy();
  });

  it('should display error messages for required fields', async () => {
    const {getByText, getAllByText} = render(<RegisterScreen />);
    const sendButton = getByText('Enviar');

    fireEvent.press(sendButton);

    await waitFor(() => {
      const requiredFields = getAllByText('Campo obrigatório');
      const validThruError = getByText('Data inválida');

      expect(requiredFields.length).toBeTruthy();
      expect(validThruError).toBeTruthy();
    });
  });

  it('should display error message for invalid validThru', async () => {
    const {getByText, getByLabelText} = render(<RegisterScreen />);
    const validThruInput = getByLabelText('vencimento');
    const sendButton = getByText('Enviar');

    fireEvent.changeText(validThruInput, '13/25');
    fireEvent.press(sendButton);

    await waitFor(() => {
      const validThruError = getByText('Data inválida');

      expect(validThruError).toBeTruthy();
    });
  });

  it("should submit the form when it's valid", async () => {
    const {getByText, getByLabelText} = render(<RegisterScreen />);
    const numberInput = getByLabelText('Numero do cartão');
    const nameInput = getByLabelText('Nome do titular');
    const validThruInput = getByLabelText('vencimento');
    const cvvInput = getByLabelText('código de segurança');
    const sendButton = getByText('Enviar');

    fireEvent.changeText(numberInput, '1234 1234 1234 1234');
    fireEvent.changeText(nameInput, 'Relampago Marquinhos');
    fireEvent.changeText(validThruInput, '12/26');
    fireEvent.changeText(cvvInput, '255');

    (postCard as jest.Mock).mockResolvedValueOnce({});

    fireEvent.press(sendButton);

    await waitFor(() => {
      expect(mockReset).toHaveBeenCalledWith(
        expect.objectContaining({
          index: 0,
          routes: [
            {
              name: 'Finish',
              params: {
                card: expect.objectContaining({
                  cvv: '255',
                  name: 'Relampago Marquinhos',
                  number: '1234 1234 1234 1234',
                  validThru: '12/26',
                }),
              },
            },
          ],
        }),
      );
    });
  });

  it('should show error Alert when api returns error', async () => {
    const {getByText, getByLabelText} = render(<RegisterScreen />);
    const numberInput = getByLabelText('Numero do cartão');
    const nameInput = getByLabelText('Nome do titular');
    const validThruInput = getByLabelText('vencimento');
    const cvvInput = getByLabelText('código de segurança');
    const sendButton = getByText('Enviar');

    fireEvent.changeText(numberInput, '1234 1234 1234 1234');
    fireEvent.changeText(nameInput, 'Relampago Marquinhos');
    fireEvent.changeText(validThruInput, '12/26');
    fireEvent.changeText(cvvInput, '255');

    (postCard as jest.Mock).mockRejectedValueOnce({});

    fireEvent.press(sendButton);

    await waitFor(() => {
      expect(mockAlert).toHaveBeenCalledWith(
        'Ops!',
        'Ocorreu um erro ao salvar o cartão',
      );
    });
  });
});
