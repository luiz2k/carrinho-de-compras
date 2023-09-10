'use client';

import formatCurrency from '@/utils/formatCurrency';
import s from './styles.module.scss';

import headerStyle from '../Header/styles.module.scss';

import { BsCartPlus } from 'react-icons/bs';

import { useContext } from 'react';
import { DataContext } from '@/contexts/DataContextProvider';
import Image from 'next/image';

type ProductCard = {
  data: {
    id: string;
    thumbnail: string;
    title: string;
    price: number;
  };
};

type handleAddToCartButton = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
};

export default function ProductCard({ data }: ProductCard) {
  const { setCartData, animationSpan } = useContext(DataContext);

  function addMoreAnimation() {
    setTimeout(() => {
      animationSpan.current?.classList.add(headerStyle.animation);
    }, 0);

    animationSpan.current?.classList.remove(headerStyle.animation);
  }

  function handleAddToCartButton(data: handleAddToCartButton) {
    const { id, title, thumbnail, price } = data;

    setCartData((prev) => {
      const prevFilter = prev.find((product) => {
        return product.id === id;
      });

      if (prevFilter) {
        const dataCopy = prev.map((product) => {
          if (product.id === id) {
            addMoreAnimation();
            return { ...product, amount: product.amount + 1 };
          }

          return product;
        });

        return dataCopy;
      }

      return [...prev, { id, title, thumbnail, price, amount: 1 }];
    });
  }

  return (
    <article className={s.homeArticle} title={data.title}>
      <Image
        src={data.thumbnail.replace('http://', 'https://').replace(/\w\.jpg/gi, 'W.jpg')}
        alt={data.title}
        width={228}
        height={228}
        priority={true}
      />

      <div className={s.productInfo}>
        <p className={s.productTitle}>{data.title}</p>

        <div>
          <p className={s.productPrice}>{formatCurrency(data.price, 'BRL')}</p>
          <button onClick={() => handleAddToCartButton(data)}>
            <BsCartPlus /> CARRINHO +
          </button>
        </div>
      </div>
    </article>
  );
}
