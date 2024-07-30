import axios from 'axios';
import {environment} from '../config/environment';
import {CardData} from '../screens/wallet/components/cardlist';

const env = environment();

const api = axios.create({
  baseURL: env.apiUrl,
});

interface PostCardPayload extends CardData {}

export const postCard = async (data: PostCardPayload) => {
  return api.post('/cards', data);
};

export const getCards = async () => {
  return api.get('/cards');
};
