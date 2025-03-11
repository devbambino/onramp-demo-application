'use client';
import { NextUIProvider } from '@nextui-org/react';
import { CoinbaseRampTransactionProvider } from './contexts/CoinbaseRampTransactionContext';

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <CoinbaseRampTransactionProvider>
        {children}
      </CoinbaseRampTransactionProvider>
    </NextUIProvider>
  );
}
