'use client';
import React from 'react';
import { ThemeProvider as _ThemeProvider } from 'next-themes';

export default function ThemeProvider({ children }: React.PropsWithChildren) {
  return <_ThemeProvider attribute='class'>{children}</_ThemeProvider>;
}

