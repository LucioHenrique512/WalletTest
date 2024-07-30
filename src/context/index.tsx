import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';
import {CardType} from '../infra/types';

interface ContextType {
  cards: CardType[];
  setCards: Dispatch<SetStateAction<CardType[]>>;
}

const Context = createContext<ContextType>({} as ContextType);

export const AppContextProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [cards, setCards] = useState<CardType[]>([]);

  return (
    <Context.Provider value={{cards, setCards}}>{children}</Context.Provider>
  );
};

export const useAppContext = () => React.useContext(Context);
