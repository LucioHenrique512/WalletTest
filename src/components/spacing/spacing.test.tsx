import React from 'react';
import {Spacing} from './index';
import { render } from '../../../tests/render';

jest.mock('react-native-responsive-fontsize', () => {
  return {RFPercentage: jest.fn().mockReturnValue(50)};
});

describe('Spacing', () => {
  it('should render the component with the specified size', () => {
    const {getByTestId} = render(<Spacing testID="spacing" size={10} />);
    const spacing = getByTestId('spacing');

    expect(spacing.props.style).toHaveProperty('height', 10);
  });

  it('should render the component with the default size', () => {
    const {getByTestId} = render(<Spacing testID="spacing" />);
    const spacing = getByTestId('spacing');

    expect(spacing.props.style).toHaveProperty('height', 50);
  });

  it('should render the component with vertical spacing', () => {
    const {getByTestId} = render(<Spacing testID="spacing" vertical />);
    const spacing = getByTestId('spacing');

    expect(spacing.props.style).toHaveProperty('width', 50);
  });
});
