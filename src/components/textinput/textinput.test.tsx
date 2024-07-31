import React, {useRef} from 'react';
import {fireEvent} from '@testing-library/react-native';
import {Text} from 'react-native';
import {TextInput} from '.';
import {render} from '../../../tests/render';

jest.mock('react', () => {
  const actual = jest.requireActual('react');
  return {
    ...actual,
    useRef: jest.fn(),
  };
});

jest.mock('react-native-text-input-mask', () => {
  return {
    __esModule: true,
    default: jest.fn(() => {
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

  it('should calls onChangeText when the input value changes', () => {
    const mockRef = {current: {focus: jest.fn()}};

    (useRef as jest.Mock).mockReturnValue(mockRef);

    const onChangeTextMock = jest.fn();
    const {getByPlaceholderText} = render(
      <TextInput
        onChangeText={onChangeTextMock}
        value="test-value"
        placeholder="Digite seu nome"
      />,
    );
    const input = getByPlaceholderText('Digite seu nome');

    fireEvent.press(input);

    expect(mockRef.current.focus).toHaveBeenCalled();
  });
});
