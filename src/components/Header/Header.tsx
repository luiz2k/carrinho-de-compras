'use client';

import Link from 'next/link';

import { TiShoppingCart } from 'react-icons/ti';

import s from './styles.module.scss';

import { useContext } from 'react';
import { DataContext } from '@/contexts/DataContextProvider';

import HeaderCartModal from '../HeaderCartModal/HeaderCartModal';
import { usePathname } from 'next/navigation';

export default function Header() {
  const { cartData, animationSpan } = useContext(DataContext);
  const newCartData = cartData.slice(-3);

  const pathname = usePathname();
  const routeName = pathname.replace('/', '');

  return (
    <header className={s.header}>
      <h1 className={s.h1}>Carrinho de Compras</h1>

      <div className={s.cart}>
        <Link href={'/carrinho'}>
          {cartData.length > 0 && (
            <span className={s.span} style={{ display: routeName === 'carrinho' ? 'none' : '' }}>
              {cartData.length}
            </span>
          )}
          <span ref={animationSpan} className={`${s.newProductAdded}`}>
            +1
          </span>
          <TiShoppingCart />
        </Link>

        {cartData.length > 0 ? (
          <div className={s.menu} style={{ display: routeName === 'carrinho' ? 'none' : '' }}>
            <p>
              {cartData.length} {cartData.length === 1 ? 'Produto' : 'Produtos'} no carrinho
            </p>

            <div>
              {newCartData.map((product) => (
                <HeaderCartModal key={product.id} data={product}></HeaderCartModal>
              ))}
            </div>

            <Link href={'/carrinho'}>FINALIZAR COMPRA</Link>
          </div>
        ) : (
          ''
        )}
      </div>
    </header>
  );
}
