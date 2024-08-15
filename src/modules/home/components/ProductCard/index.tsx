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

  const isLink = (string: string): boolean => {
    const regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;

    return regex.test(string);
  };

  return (
    <>
      {isLink(image) && (
        <article title={title}>
          <Card className="w-[275px] pt-6">
            <CardContent>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={title}
                  width={225}
                  height={225}
                  className="mx-auto duration-200 hover:scale-105"
                />
              </div>

              <CardTitle className="line-clamp-1 pt-2.5 text-base">
                {title}
              </CardTitle>
            </CardContent>

            <CardFooter>
              <p>R$ {price}</p>

              <Button
                size="sm"
                className="ml-auto"
                onClick={() => add({ id, title, description, image, price })}
              >
                + CARRINHO
              </Button>
            </CardFooter>
          </Card>
        </article>
      )}
    </>
  );
}
