import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/modules/shared/components/Header";
import "@/styles/globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <Header />
        <main className="m-auto mt-[calc(3.563rem+2rem)] max-w-7xl p-2.5">
          {children}
        </main>

        <Toaster />
      </body>
    </html>
  );
}
