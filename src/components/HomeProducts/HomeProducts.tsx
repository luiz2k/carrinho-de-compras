'use client';

import ProductCard from '../HomeProductCard/HomeProductCard';

import mercadoLibre from '@/api/mercadoLibre';

import { useQuery } from 'react-query';

import s from './styles.module.scss';

type ProductCard = {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
};

export default function Products() {
  const { data, isLoading } = useQuery({
    queryKey: ['MercadoLibre'],
    queryFn: mercadoLibre,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      {isLoading ? (
        <h2 className={s.h2}>Carregando...</h2>
      ) : (
        data?.map((item: ProductCard) => <ProductCard key={item.id} data={item} />)
      )}
    </>
  );
}
