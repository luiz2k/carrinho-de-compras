'use client';

import { useContext } from 'react';
import { DataContext } from '@/contexts/DataContextProvider';

import s from './style.module.scss';

import CartProductCard from '../CartProductCard/CartProductCard';

type CartProductCard = {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
  amount: number;
};

export default function Cart() {
  const { cartData, setCartData } = useContext(DataContext);

  return (
    <>
      {cartData.length > 0 ? (
        <button className={s.button} onClick={() => setCartData([])}>
          LIMPAR CARRINHO
        </button>
      ) : (
        ''
      )}

      {cartData.length > 0 ? (
        cartData?.map((product: CartProductCard) => (
          <CartProductCard key={product.id} data={product} />
        ))
      ) : (
        <h2 className={s.h2}>Carrinho de compras vazio</h2>
      )}
    </>
  );
}
