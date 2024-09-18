"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useProductStore } from "../shared/stores/productStore";
import CartCard from "./components/CartCard";

export function CartPage() {
  const { products, reset } = useProductStore();

  // Calcula o valor total dos produtos no carrinho
  const totalPrice = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );

  return (
    <div className="m-auto grid w-fit grid-cols-[27.875rem_27.875rem] gap-2.5">
      <section className="space-y-2.5">
        {products[0] && (
          <Button onClick={reset} className="w-full uppercase">
            Limpar carrinho
          </Button>
        )}

        {products.length ? (
          <>
            {products.map((product) => (
              <CartCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
          </>
        ) : (
          <>
            <p className="text-center text-xl font-bold uppercase">
              Carrinho vazio
            </p>
          </>
        )}
      </section>

      <aside className="sticky top-[calc(3.563rem+0.625rem)] h-fit">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="uppercase">Resumo</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Valor total dos produtos</p>
            <p className="text-2xl font-bold">R$ {totalPrice}</p>
          </CardContent>
          <CardFooter>
            <Button disabled className="w-full uppercase">
              Finalizar compra
            </Button>
          </CardFooter>
        </Card>
      </aside>
    </div>
  );
}
