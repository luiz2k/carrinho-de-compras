import '../sass/reset.scss';
import s from './styles.module.scss';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import ReactQueryProvider from '../reactQuery/ReactQueryProvider';

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
            <main className={s.main}>{children}</main>
            <Footer />
          </ReactQueryProvider>
        </DataContextProvider>
      </body>
    </html>
  );
}
