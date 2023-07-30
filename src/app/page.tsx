import Products from '@/components/HomeProducts/HomeProducts';
import s from './styles.module.scss';

export default function Home() {
  return (
    <section className={s.homeSection}>
      <Products />
    </section>
  );
}
