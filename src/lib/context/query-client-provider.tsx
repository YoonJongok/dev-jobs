'use client';
import React from 'react';
import { QueryClientProvider as _QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface QueryClientProviderProps {
  children: React.ReactNode;
}

export default function QueryClientProvider({ children }: QueryClientProviderProps) {
  const [client] = React.useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  );

  return (
    <_QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </_QueryClientProvider>
  );
}

