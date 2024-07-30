import {useCallback, useEffect, useState} from 'react';
import {CardType} from '../infra/types';
import {getCards, postCard} from '../infra/api';

type OnError = (error: unknown) => void;

type UseCardsDataProps = {
  onLoadError?: OnError;
  suppressFetch?: boolean;
};

export const useCardsData = ({
  onLoadError,
  suppressFetch,
}: UseCardsDataProps) => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCards = useCallback(async (onError: OnError) => {
    console.log('fetchCards executed');
    try {
      setLoading(true);
      const response = await getCards();
      setCards(response.data);
    } catch (error: unknown) {
      onError(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const getData = async () =>
      await fetchCards(err => onLoadError && onLoadError(err));
    if (cards.length === 0 && !suppressFetch) {
      getData();
    }
  }, []);

  return {cards, loading, fetchCards};
};
