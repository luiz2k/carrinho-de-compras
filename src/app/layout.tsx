import '../sass/reset.scss';
import s from './styles.module.scss';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import DataContextProvider from '@/contexts/DataContextProvider';

import { Roboto } from 'next/font/google';

import type { Metadata } from 'next';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Carrinho de Compras',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <DataContextProvider>
          <Header />
          <main className={s.main}>{children}</main>
          <Footer />
        </DataContextProvider>
      </body>
    </html>
  );
}
