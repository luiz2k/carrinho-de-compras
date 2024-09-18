"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { useProductStore } from "@/modules/shared/stores/productStore";
import Image from "next/image";

import type { CardProps } from "./types";

export function ProductCard({
  id,
  title,
  description,
  image,
  price,
}: CardProps) {
  const { add } = useProductStore();

  return (
    <article title={title}>
      <Card className="w-[17.188rem] pt-6">
        <CardContent>
          <div className="flex h-[14.063rem] items-center justify-center overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title}
              width={225}
              height={225}
              className="duration-200 hover:scale-105"
            />
          </div>

          <CardTitle className="line-clamp-1 pt-2.5 text-base">
            {title}
          </CardTitle>
        </CardContent>

        <CardFooter>
          <span>R$ {price}</span>

          <Button
            size="sm"
            className="ml-auto uppercase"
            onClick={() => add({ id, title, description, image, price })}
          >
            + Carrinho
          </Button>
        </CardFooter>
      </Card>
    </article>
  );
}
