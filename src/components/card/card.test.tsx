import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {Card} from '.';
import {render} from '../../../tests/render';

describe('Card', () => {
  const mockOnPress = jest.fn();

  it('should render correctly with black card type', () => {
    const {getByText} = render(
      <Card
        name="John Doe"
        number="1234 5678 9012 3456"
        validThru="12/24"
        type="black"
        onPress={mockOnPress}
      />,
    );

    expect(getByText('Black Card')).toBeTruthy();
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('Validade 12/24')).toBeTruthy();
  });

  it('should render correctly with green card type', () => {
    const {getByText} = render(
      <Card
        name="Jane Smith"
        number="9876 5432 1098 7654"
        validThru="06/23"
        type="green"
        onPress={mockOnPress}
      />,
    );

    expect(getByText('Green Card')).toBeTruthy();
    expect(getByText('Jane Smith')).toBeTruthy();
    expect(getByText('Validade 06/23')).toBeTruthy();
  });

  it('should render obfuscated number', () => {
    const number = '9876 5432 1098 7654';
    const expected = '•••• •••• •••• 7654';

    const {getByText} = render(
      <Card
        name="Jane Smith"
        number={number}
        validThru="06/23"
        type="green"
        onPress={mockOnPress}
      />,
    );

    expect(getByText(expected)).toBeTruthy();
  });

  it('should call onPress when pressed', () => {
    const {getByTestId} = render(
      <Card
        name="John Doe"
        number="1234 5678 9012 3456"
        validThru="12/24"
        type="black"
        onPress={mockOnPress}
      />,
    );

    fireEvent.press(getByTestId('card-pressable'));

    expect(mockOnPress).toHaveBeenCalled();
  });
});
