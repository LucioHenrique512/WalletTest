import React from 'react';
import { ContainerWithSqares } from './index';
import { Text } from 'react-native';
import { render } from '../../../tests/render';

describe('ContainerWithSqares', () => {
  it('should render the component with squares', () => {
    const { getByTestId } = render(<ContainerWithSqares />);
    const squareTop = getByTestId('square-top');
    const squareBottom = getByTestId('square-bottom');

    expect(squareTop).toBeTruthy();
    expect(squareBottom).toBeTruthy();
  });

  it('should render the children components', () => {
    const { getByText } = render(
      <ContainerWithSqares>
        <Text>Child Component</Text>
      </ContainerWithSqares>
    );
    const childComponent = getByText('Child Component');

    expect(childComponent).toBeTruthy();
  });
});