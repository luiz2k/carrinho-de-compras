import Header from '@/components/Header/Header';

import ReactQueryProvider from '../reactQuery/ReactQueryProvider';

import '../sass/globalStyle.scss';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import type { Metadata } from 'next';

import DataContextProvider from '@/contexts/DataContextProvider';

export const metadata: Metadata = {
  title: 'Carrinho de Compras',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <DataContextProvider>
          <ReactQueryProvider>
            <Header />
            <main>{children}</main>
          </ReactQueryProvider>
        </DataContextProvider>
      </body>
    </html>
  );
}
