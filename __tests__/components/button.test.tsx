import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {Button} from '../../src/components/button';
import {render} from '../config/render';
import {lightTheme} from '../../src/themes';

describe(Button.name, () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render correctly with text', () => {
    const {getByText} = render(<Button text="Click me" onPress={() => {}} />);

    expect(getByText('Click me')).toBeTruthy();
  });

  it('should renders with default colors', () => {
    const {getByText} = render(<Button text="Click me" onPress={jest.fn()} />);
    const buttonText = getByText('Click me');
    expect(buttonText.props.style.color).toBe(lightTheme.colors.darkBlue);
  });

  it('should renders with secondary colors', () => {
    const {getByText} = render(
      <Button text="Click me" onPress={jest.fn()} variant="secondary" />,
    );
    const buttonText = getByText('Click me');
    expect(buttonText.props.style.color).toBe(lightTheme.colors.white);
  });

  it('should fires onPress event', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <Button text="Click me" onPress={onPressMock} />,
    );
    const button = getByText('Click me');

    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });

  describe('on disabled', () => {
    it('should renders disabled button', () => {
      const {getByText} = render(
        <Button text="Click me" onPress={jest.fn()} disabled={true} />,
      );
      const buttonText = getByText('Click me');
      expect(buttonText.props.style.color).toBe(lightTheme.colors.darkGrey);
    });

    it('should not fires onPress event', () => {
      const onPressMock = jest.fn();
      const {getByText} = render(
        <Button text="Click me" onPress={onPressMock} disabled={true} />,
      );
      const button = getByText('Click me');

      fireEvent.press(button);
      expect(onPressMock).not.toHaveBeenCalled();
    });
  });

  describe('on loading', () => {
    it('should renders disabled button', () => {
      const {getByTestId} = render(
        <Button text="Click me" onPress={jest.fn()} loading={true} />,
      );
      const button = getByTestId('button');
      expect(button.props.style.backgroundColor).toBe(
        lightTheme.colors.lightGrey,
      );
    });

    it('should not fires onPress event', () => {
      const onPressMock = jest.fn();
      const {getByTestId} = render(
        <Button text="Click me" onPress={onPressMock} loading={true} />,
      );
      const button = getByTestId('button');

      fireEvent.press(button);
      expect(onPressMock).not.toHaveBeenCalled();
    });

    it('should render activity-indicator', () => {
      const onPressMock = jest.fn();
      const {getByTestId} = render(
        <Button text="Click me" onPress={onPressMock} loading={true} />,
      );
      const indicator = getByTestId('activity-indicator');

      expect(indicator).toBeTruthy();
    });
  });
});
