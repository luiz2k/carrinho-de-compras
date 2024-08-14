import { ProductCard } from "@/modules/home/components/ProductCard";

export type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
};

export type ProductStore = {
  products: Product[];
  add: (newProduct: Omit<Product, "quantity">) => void;
  increase: (productId: number) => void;
  decrease: (productId: number) => void;
  remove: (productId: number) => void;
  reset: () => void;
};
