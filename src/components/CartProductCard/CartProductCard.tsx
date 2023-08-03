import formatCurrency from '@/utils/formatCurrency';
import s from './styles.module.scss';

import { GrTrash } from 'react-icons/gr';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

import { useContext } from 'react';
import { DataContext } from '@/contexts/DataContextProvider';
import Image from 'next/image';

type CartCard = {
  data: {
    id: string;
    thumbnail: string;
    title: string;
    price: number;
    amount: number;
  };
};

export default function CartCard({ data }: CartCard) {
  const { setCartData } = useContext(DataContext);

  function incrementProduct(id: string) {
    setCartData((products) => {
      const newProducts = products.map((product) => {
        if (product.id === id) {
          return { ...product, amount: product.amount + 1 };
        }
        return product;
      });

      return newProducts;
    });
  }

  function drecrementProduct(id: string, amount: number) {
    if (amount === 1) removeProduct(id);

    setCartData((products) => {
      const newProducts = products.map((product) => {
        if (product.id === id) {
          return { ...product, amount: product.amount - 1 };
        }
        return product;
      });

      return newProducts;
    });
  }

  function removeProduct(id: string) {
    setCartData((products) => {
      const filterProducts = products.filter((product) => product.id !== id);

      return filterProducts;
    });
  }

  return (
    <article className={s.cartArticle}>
      <div>
        <Image
          src={data.thumbnail.replace('http://', 'https://')}
          alt={data.title}
          width={100}
          height={100}
          priority={true}
        />
      </div>

      <div className={s.productInfo}>
        <p className={s.productTitle}>{data.title}</p>

        <div className={s.productPriceAndAmount}>
          <div className={s.price}>
            <p>Preço à vista</p>

            <div>
              <p className={s.productPrice}>{formatCurrency(data.price * data.amount, 'BRL')}</p>
            </div>
          </div>

          <div className={s.amount}>
            <p>Quantidade</p>

            <div className={s.productAmount}>
              <button onClick={() => drecrementProduct(data.id, data.amount)}>
                <SlArrowLeft />
              </button>
              <p>{data.amount}</p>
              <button onClick={() => incrementProduct(data.id)}>
                <SlArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <GrTrash onClick={() => removeProduct(data.id)} />
    </article>
  );
}
