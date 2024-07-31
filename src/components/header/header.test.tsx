import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {Text} from 'react-native';
import { render } from '../../utils/testUtils';
import { Header } from '.';

describe('Header', () => {
  it('should render the title correctly', () => {
    const {getByText} = render(<Header title="Test Title" />);
    expect(getByText('Test Title')).toBeTruthy();
  });

  it('should call goBack when the back button is pressed', () => {
    const goBackMock = jest.fn();

    jest.clearAllMocks();
    const useNavigation = require('@react-navigation/native').useNavigation;
    useNavigation.mockReturnValue({goBack: goBackMock});

    const {getByTestId} = render(<Header title="Test Title" />);
    const backButton = getByTestId('back-button');

    fireEvent.press(backButton);

    expect(goBackMock).toHaveBeenCalled();
  });

  it('should render the rightComponent correctly', () => {
    const rightComponent = <Text>Test Component</Text>;
    const {getByText} = render(
      <Header title="Test Title" rightComponent={rightComponent} />,
    );

    expect(getByText('Test Component')).toBeTruthy();
  });

  it('should render with transparent background when transparent prop is true', () => {
    const {getByTestId} = render(
      <Header title="Test Title" transparent={true} />,
    );
    const container = getByTestId('header-container');

    expect(container.props.style.backgroundColor).toBe('transparent');
  });

  it('should render with shadow background when transparent prop is false', () => {
    const {getByTestId} = render(
      <Header title="Test Title" transparent={false} />,
    );
    const container = getByTestId('header-container');

    expect(container.props.style).toContainEqual({
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 6},
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
    });
  });
});
