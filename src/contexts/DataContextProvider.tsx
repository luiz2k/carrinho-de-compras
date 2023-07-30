'use client';

import { createContext, useState, ReactNode } from 'react';

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
};

type DataContextProvider = {
  children: ReactNode;
};

export const DataContext = createContext<createContext>({
  cartData: [],
  setCartData: () => {},
});

export default function DataContextProvider({ children }: DataContextProvider) {
  const [cartData, setCartData] = useState<cartData[]>([]);

  return <DataContext.Provider value={{ cartData, setCartData }}>{children}</DataContext.Provider>;
}
