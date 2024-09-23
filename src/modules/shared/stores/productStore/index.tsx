import { toast } from "@/components/ui/use-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { ProductStore } from "./types";

// Responsável pelo estado do carrinho de compras
export const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      // Produtos adicionados ao carrinho
      products: [],

      // Adiciona um novo produto ao carrinho
      add: (newProduct) =>
        set((state) => {
          // Verifica se o produto já esta no carrinho
          const findProduct = state.products.find(
            (product) => product.id === newProduct.id,
          );

          // Se o produto já estiver no carrinho, mostra uma mensagem de erro
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

          // Se o produto não estiver no carrinho, adiciona-o
          return {
            products: [...state.products, { ...newProduct, quantity: 1 }],
          };
        }),

      // Aumenta a quantidade de um produto no carrinho
      increase: (productId) =>
        set((state) => {
          // Verifica se o produto está no carrinho
          const findProduct = state.products.find(
            (product) => product.id === productId,
          );

          // Se o produto não estiver no carrinho, retorna o estado anterior
          if (!findProduct) {
            return state;
          }

          // Da um loop em todos os produtos do carrinho
          // Se o id do produto for igual ao id recebido no parâmetro, aumenta a quantidade em +1
          const updatedProducts = state.products.map((product) => {
            if (product.id === productId) {
              return {
                ...product,
                quantity: product.quantity + 1,
              };
            }

            return product;
          });

          // Retorna o produto com a quantidade aumentada
          return {
            products: updatedProducts,
          };
        }),

      // Diminui a quantidade de um produto no carrinho
      decrease: (productId) =>
        set((state) => {
          // Verifica se o produto está no carrinho
          const findProduct = state.products.find(
            (product) => product.id === productId,
          );

          // Se o produto não estiver no carrinho, retorna o estado anterior
          if (!findProduct) {
            return state;
          }

          // Da um loop em todos os produtos do carrinho
          // Se o id do produto for igual ao id recebido no parâmetro, decrementa a quantidade em -1
          const updatedProducts = state.products.map((product) => {
            if (product.id === productId) {
              // Impede a quantidade do produto ser menor que 1
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

          // Retorna o produto com a quantidade decrementada
          return {
            products: updatedProducts,
          };
        }),

      // Remove um produto do carrinho
      remove: (productId) =>
        set((state) => {
          // Obtém os produtos do carrinho que não são iguais ao id recebido no parâmetro
          const updatedProducts = state.products.filter(
            (product) => product.id !== productId,
          );

          // Retorna o carrinho com os produtos atualizados
          return {
            products: updatedProducts,
          };
        }),

      // Limpa o carrinho
      reset: () => set({ products: [] }),
    }),
    {
      name: "product-store",
    },
  ),
);
