'use client';

import { ReactNode } from 'react';

import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'react-query';

const queryClient = new QueryClient();

type ReactQueryProviderType = {
  children: ReactNode;
};

export default function ReactQueryProvider({ children }: ReactQueryProviderType) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
