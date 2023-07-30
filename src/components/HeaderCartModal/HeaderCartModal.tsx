import s from './styles.module.scss';

import { useContext } from 'react';
import { DataContext } from '@/contexts/DataContextProvider';

import formatCurrency from '@/utils/formatCurrency';

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
      <img src={data.thumbnail} alt={data.title} className={s.modalImage} />

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
