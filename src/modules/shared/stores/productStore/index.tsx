import { toast } from "@/components/ui/use-toast";
import { create } from "zustand";

import type { ProductStore } from "./types";

export const useProductStore = create<ProductStore>()((set) => ({
  products: [],

  add: (newProduct) =>
    set((state) => {
      const findProduct = state.products.find(
        (product) => product.id === newProduct.id,
      );

      if (findProduct) {
        toast({
          variant: "destructive",
          title: "OPS!",
          description: "Este produto ja foi adicionado ao carrinho.",
        });

        return state;
      }

      toast({
        title: "SUCESSO!",
        description: "Produto adicionado ao carrinho.",
      });

      return { products: [...state.products, { ...newProduct, quantity: 1 }] };
    }),

  increase: (productId) =>
    set((state) => {
      const findProduct = state.products.find(
        (product) => product.id === productId,
      );

      if (!findProduct) {
        return state;
      }

      const updatedProducts = state.products.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity + 1 };
        }

        return product;
      });

      return {
        products: updatedProducts,
      };
    }),

  decrease: (productId) =>
    set((state) => {
      const findProduct = state.products.find(
        (product) => product.id === productId,
      );

      if (!findProduct) {
        return state;
      }

      const updatedProducts = state.products.map((product) => {
        if (product.id === productId) {
          if (product.quantity === 1) {
            return product;
          }

          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }

        return product;
      });

      return {
        products: updatedProducts,
      };
    }),

  remove: (productId) =>
    set((state) => {
      const updatedProducts = state.products.filter(
        (product) => product.id !== productId,
      );

      return {
        products: updatedProducts,
      };
    }),

  reset: () => set({ products: [] }),
}));
