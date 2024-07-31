import React from 'react';
import {fireEvent, waitFor} from '@testing-library/react-native';
import {RegisterScreen} from '.';
import {render} from '../../../tests/render';

jest.mock('react-native-text-input-mask', () => {
  return {
    __esModule: true,
    default: jest.fn(() => {
      const {View} = require('react-native');
      return <View testID="text-field-mask" />;
    }),
  };
});

describe('RegisterScreen', () => {
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
});
