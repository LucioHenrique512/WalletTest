import React from 'react';
import {waitFor} from '@testing-library/react-native';
import {getCards} from '../../infra/api';
import {LoadingScreen} from '.';
import {Alert} from 'react-native';
import { render } from '../../../tests/render';

jest.mock('../../infra/api');
jest.mock('@react-navigation/native');

describe('LoadingScreen component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading screen', async () => {
    const {getByTestId} = render(<LoadingScreen />);
    const loadingContainer = getByTestId('loading-container');

    expect(loadingContainer).toBeDefined();
  });

  it('renders error alert when fetching cards fails', async () => {
    const mockAlert = jest.fn();

    jest.spyOn(Alert, 'alert').mockImplementation(mockAlert);

    (getCards as jest.MockedFunction<typeof getCards>).mockRejectedValueOnce(
      new Error('Failed to fetch cards'),
    );

    const {getByText} = render(<LoadingScreen />);
    const alertText = 'Ocorreu um erro ao buscar os cartões';

    await waitFor(() => {
      expect(getCards).toHaveBeenCalledTimes(1);
      expect(mockAlert).toHaveBeenCalledWith(
        'Ops!',
        'Ocorreu um erro ao buscar os cartões',
        [expect.objectContaining({text: 'Voltar pra home'})],
      );
    });
  });
});
