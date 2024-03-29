import React from 'react';
import { cn } from '../lib/utils/cn';
import { FlexBoxColumn } from './ui/flexbox-column';

interface LayoutProps {
  children: React.ReactNode;
}

export const Container = ({ children }: LayoutProps) => {
  return <FlexBoxColumn className={cn('w-full  h-full min-h-screen')}>{children}</FlexBoxColumn>;
};

