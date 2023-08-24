// 'use client';

import ProductCard from '../HomeProductCard/HomeProductCard';

import mercadoLibre from '@/api/mercadoLibre';

type ProductCard = {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
};

export default async function Products() {
  const data = await mercadoLibre();

  return <>{data?.map((item: ProductCard) => <ProductCard key={item.id} data={item} />)}</>;
}
