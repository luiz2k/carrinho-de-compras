import Cart from '@/components/Cart/Cart';
import CartSummary from '@/components/CartSummary/CartSummary';

import s from './styles.module.scss';

export default function Carrinho() {
  return (
    <div className={s.divCart}>
      <section className={s.sectionCart}>
        <Cart />
      </section>

      <aside className={s.asideCart}>
        <CartSummary />
      </aside>
    </div>
  );
}
