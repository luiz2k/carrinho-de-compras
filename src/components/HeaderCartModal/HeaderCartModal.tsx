import s from './styles.module.scss';

import { useContext } from 'react';
import { DataContext } from '@/contexts/DataContextProvider';

import formatCurrency from '@/utils/formatCurrency';
import Image from 'next/image';

type CartModal = {
  data: {
    id: string;
    thumbnail: string;
    title: string;
    price: number;
    amount: number;
  };
};

export default function CartModal({ data }: CartModal) {
  const { setCartData } = useContext(DataContext);

  function removeProduct(id: string) {
    setCartData((products) => {
      const filterProducts = products.filter((product) => product.id !== id);

      return filterProducts;
    });
  }

  return (
    <article className={s.modalProduct}>
      <Image
        src={data.thumbnail.replace('http://', 'https://')}
        alt={data.title}
        width={90}
        height={90}
        priority={true}
      />

      <div>
        <div className={s.modalTitleAndRemove}>
          <h2>{data.title}</h2>
          <button onClick={() => removeProduct(data.id)}>Remover</button>
        </div>
        <div>
          <p className={s.modalPrice}>{formatCurrency(data.price, 'BRL')}</p>
        </div>
      </div>
    </article>
  );
}
