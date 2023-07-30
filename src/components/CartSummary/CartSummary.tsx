'use client';

import s from './styles.module.scss';

import { useContext } from 'react';
import { DataContext } from '@/contexts/DataContextProvider';

import formatCurrency from '@/utils/formatCurrency';

import Link from 'next/link';

export default function CartSummary() {
  const { cartData } = useContext(DataContext);

  const totalPrice = cartData.reduce((acc, product) => {
    return acc + product.price * product.amount;
  }, 0);

  return (
    <article className={s.articleSummary}>
      <h2 className={s.titleSummary}>RESUMO</h2>

      <div className={s.bodySummary}>
        <div className={s.totalPrice}>
          <p>
            Valor total dos produtos: <span>{formatCurrency(totalPrice, 'BRL')}</span>
          </p>
        </div>

        {cartData.length > 0 ? (
          <div className={s.totalProducts}>
            <p>
              <span>{cartData.length}</span> Produtos no carrinho
            </p>
          </div>
        ) : (
          ''
        )}

        <div className={s.paymentOnPix}>
          <p>
            Valor à vista no <span>PIX</span>
          </p>
          <p className={s.pricePix}>Preço {formatCurrency(totalPrice - totalPrice / 10, 'BRL')}</p>
          <p>
            (Economize: <span>{formatCurrency(totalPrice / 10, 'BRL')}</span>)
          </p>
        </div>
        <div className={s.buttons}>
          <Link href={'/'}>IR PARA PAGAMENTO</Link>
          <Link href={'/'}>CONTINUAR COMPRANDO</Link>
        </div>
      </div>
    </article>
  );
}
