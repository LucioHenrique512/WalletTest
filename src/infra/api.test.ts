import MockAdapter from 'axios-mock-adapter';
import {postCard, getCards, api} from './api';
import {CardType} from './types';

const mock = new MockAdapter(api);

describe('Api', () => {
  afterEach(() => {
    mock.reset();
  });

  describe('postCard', () => {
    it('should post a new card and return the response data', async () => {
      const cardData: CardType = {id: '1', name: 'Test Card'} as CardType;
      const responseData = {success: true, data: cardData};

      mock.onPost('/cards', cardData).reply(200, responseData);

      const response = await postCard(cardData);

      expect(response.status).toBe(200);
      expect(response.data).toEqual(responseData);
    });

    it('should handle errors', async () => {
      const cardData: CardType = {id: '1', name: 'Test Card'} as CardType;

      mock.onPost('/cards', cardData).reply(500);

      try {
        await postCard(cardData);
      } catch (error: any) {
        expect(error.response.status).toBe(500);
      }
    });
  });

  describe('getCards', () => {
    it('should fetch a list of cards', async () => {
      const cards: CardType[] = [
        {id: '1', name: 'Card 1'} as CardType,
        {id: '2', name: 'Card 2'} as CardType,
      ];

      mock.onGet('/cards').reply(200, cards);

      const response = await getCards();

      expect(response.status).toBe(200);
      expect(response.data).toEqual(cards);
    });

    it('should handle errors', async () => {
      mock.onGet('/cards').reply(404);

      try {
        await getCards();
      } catch (error: any) {
        expect(error.response.status).toBe(404);
      }
    });
  });
});
