import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {CardType} from '../infra/types';
import {Text} from 'react-native';
import {Button} from 'react-native';
import {AppContextProvider, useAppContext} from '.';
import {render} from '../utils/testUtils';

const TestComponent = () => {
  const {cards, setCards} = useAppContext();

  return (
    <>
      <Text testID="card-count">{cards.length}</Text>
      <Button
        title="Add Card"
        onPress={() =>
          setCards((prevCards: CardType[]) => [
            ...prevCards,
            {id: 'new-card', name: 'New Card'} as CardType,
          ])
        }
      />
    </>
  );
};

describe('AppContext', () => {
  test('provides default state', () => {
    const {getByTestId} = render(
      <AppContextProvider>
        <TestComponent />
      </AppContextProvider>,
    );

    expect(getByTestId('card-count').props.children).toBe(0);
  });

  test('updates the state when setCards is called', () => {
    const {getByTestId, getByText} = render(
      <AppContextProvider>
        <TestComponent />
      </AppContextProvider>,
    );

    fireEvent.press(getByText('Add Card'));

    expect(getByTestId('card-count').props.children).toBe(1);
  });
});
