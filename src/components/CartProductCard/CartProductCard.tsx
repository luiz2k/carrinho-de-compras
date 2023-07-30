import formatCurrency from '@/utils/formatCurrency';
import s from './styles.module.scss';

import { GrTrash } from 'react-icons/gr';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { useContext } from 'react';
import { DataContext } from '@/contexts/DataContextProvider';

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
    <article className={s.Article}>
      <div>
        <img className={s.Image} src={data.thumbnail} alt={data.title} />
      </div>

      <div className={s.ProductInfo}>
        <p className={s.ProductTitle}>{data.title}</p>

        <div className={s.ProductPriceAndAmount}>
          <div className={s.price}>
            <p>Preço à vista</p>

            <div>
              <p className={s.ProductPrice}>{formatCurrency(data.price * data.amount, 'BRL')}</p>
            </div>
          </div>

          <div className={s.amount}>
            <p>Quantidade</p>

            <div className={s.ProductAmount}>
              <button onClick={() => drecrementProduct(data.id, data.amount)}>
                <MdKeyboardArrowLeft />
              </button>
              <p>{data.amount}</p>
              <button onClick={() => incrementProduct(data.id)}>
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <GrTrash onClick={() => removeProduct(data.id)} />
    </article>
  );
}
