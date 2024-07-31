import axios from 'axios';
import {environment} from '../config/environment';
import {CardType} from './types';

const env = environment();

export const api = axios.create({
  baseURL: env.apiUrl,
});

interface PostCardPayload extends CardType {}

export const postCard = async (data: PostCardPayload) => {
  return api.post('/cards', data);
};

export const getCards = async () => {
  return api.get<CardType[]>('/cards');
};
