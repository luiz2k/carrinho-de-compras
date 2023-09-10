'use client';

import { createContext, useState, useRef, ReactNode } from 'react';

type cartData = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  amount: number;
};

type createContext = {
  cartData: cartData[];
  setCartData: React.Dispatch<React.SetStateAction<cartData[]>>;
  animationSpan: React.MutableRefObject<null | HTMLElement>;
};

type DataContextProvider = {
  children: ReactNode;
};

export const DataContext = createContext<createContext>({
  cartData: [],
  setCartData: () => {},
  animationSpan: {
    current: null,
  },
});

export default function DataContextProvider({ children }: DataContextProvider) {
  const [cartData, setCartData] = useState<cartData[]>([]);
  const animationSpan = useRef(null);

  return (
    <DataContext.Provider value={{ cartData, setCartData, animationSpan }}>
      {children}
    </DataContext.Provider>
  );
}
