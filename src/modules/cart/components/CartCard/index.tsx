import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useProductStore } from "@/modules/shared/stores/productStore";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import Image from "next/image";

export type CartCardProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
};

export default function CartCard({
  id,
  title,
  description,
  image,
  price,
  quantity,
}: CartCardProps) {
  const { increase, decrease, remove } = useProductStore();

  return (
    <article key={id}>
      <Card className="w-full max-w-md pt-6">
        <CardContent className="grid grid-cols-[5rem_1fr_auto] items-center gap-4">
          <Image
            src={image}
            alt={title}
            width={80}
            height={80}
            className="rounded-md object-cover"
          />
          <div className="grid gap-1">
            <h3 className="line-clamp-1 font-medium">{title}</h3>
            <p className="line-clamp-3 text-sm text-muted-foreground">
              {description}
            </p>
          </div>

          <div className="grid gap-2.5">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                disabled={quantity <= 1}
                onClick={() => decrease(id)}
              >
                <MinusIcon className="size-4" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <span>{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => increase(id)}
              >
                <PlusIcon className="size-4" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>
            <div className="text-right font-medium">R$ {price * quantity}</div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="destructive"
            className="w-full uppercase"
            onClick={() => remove(id)}
          >
            <TrashIcon className="mr-2 size-4" />
            Remover
          </Button>
        </CardFooter>
      </Card>
    </article>
  );
}
