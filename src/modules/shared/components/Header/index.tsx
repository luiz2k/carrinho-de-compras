import { House, icons, ShoppingCart } from "lucide-react";
import Anchor from "./components/Anchor";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 flex items-center justify-between border-b bg-white p-2.5">
      <Link href="/">
        <Image
          src="/logo.jpg"
          alt="logo"
          width={250}
          height={250}
          className="size-9 rounded-lg"
        />
      </Link>

      <ul className="flex gap-2.5">
        <li>
          <Anchor href="/" icon={<House className="size-4" />}>
            Início
          </Anchor>
        </li>

        <li>
          <Anchor href="/cart" icon={<ShoppingCart className="size-4" />}>
            Carrinho
          </Anchor>
        </li>
      </ul>
    </header>
  );
}
