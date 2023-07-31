import formatCurrency from '@/utils/formatCurrency';
import s from './styles.module.scss';

import { BsCartPlus } from 'react-icons/bs';

import { useContext } from 'react';
import { DataContext } from '@/contexts/DataContextProvider';

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
  const { setCartData } = useContext(DataContext);

  function handleAddToCartButton(data: handleAddToCartButton) {
    const { id, title, thumbnail, price } = data;

    setCartData((prev) => {
      const prevFilter = prev.find((product) => {
        return product.id === id;
      });

      if (prevFilter) {
        const dataCopy = prev.map((product) => {
          if (product.id === id) {
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
    <article className={s.article} title={data.title}>
      <img
        className={s.productImage}
        src={data.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt={data.title}
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
