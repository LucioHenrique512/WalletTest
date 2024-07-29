import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {Text} from 'react-native';
import {render} from '../config/render';
import {TextInput} from '../../src/components';

// Crie um mock do módulo react-native-text-input-mask
jest.mock('react-native-text-input-mask', () => {
  // Retorne um objeto com um componente de função

  
    return {
    __esModule: true, // para garantir que ele seja tratado como um módulo ES
    default: jest.fn(() => {
      // Retorne um componente funcional que renderiza uma View
      const {View} = require('react-native');
      return <View testID="text-field-mask" />;
    }),
  };
});

describe(TextInput.name, () => {
  it('should renders the label correctly', () => {
    const {getByText} = render(<TextInput label="Nome" />);
    expect(getByText('Nome')).toBeTruthy();
  });

  it('should renders the input value correctly', () => {
    const {getByDisplayValue} = render(<TextInput value="Lúcio" />);
    expect(getByDisplayValue('Lúcio')).toBeTruthy();
  });

  it('should calls onChangeText when the input value changes', () => {
    const onChangeTextMock = jest.fn();
    const {getByPlaceholderText} = render(
      <TextInput
        onChangeText={onChangeTextMock}
        placeholder="Digite seu nome"
      />,
    );
    const input = getByPlaceholderText('Digite seu nome');

    fireEvent.changeText(input, 'Novo nome');

    expect(onChangeTextMock).toHaveBeenCalledWith('Novo nome');
  });

  it('should render component passed by parameter correctly', () => {
    const text = 'Hello world1';

    const {getByText} = render(
      <TextInput
        placeholder="Digite seu nome"
        leftItem={<Text>{text}</Text>}
      />,
    );

    expect(getByText(text)).toBeTruthy();
  });

  it('should render TextFieldMask when mask prop is provided', () => {
    const {getByTestId} = render(<TextInput mask="999-999" />);
    const textFieldMask = getByTestId('text-field-mask');
    expect(textFieldMask).toBeTruthy();
  });

  it('should NOT render TextFieldMask when mask prop is provided', () => {
    const {getByTestId} = render(<TextInput />);
    try {
      getByTestId('text-field-mask');
    } catch (error: any) {
      expect(
        error?.message.includes('Unable to find an element with testID'),
      ).toBeTruthy();
    }
  });
});
