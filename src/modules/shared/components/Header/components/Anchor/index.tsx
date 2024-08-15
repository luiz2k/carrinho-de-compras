"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import type { AnchorProps } from "./types";
import { usePathname } from "next/navigation";

export default function Anchor({ children, href, icon }: AnchorProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Button
      asChild
      size="sm"
      variant={isActive ? "default" : "outline"}
      disabled={isActive}
      className="gap-2.5"
    >
      <Link href={href}>
        {icon && <span>{icon}</span>}
        <span>{children}</span>
      </Link>
    </Button>
  );
}
