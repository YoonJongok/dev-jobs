import { cn } from '@/lib/utils/cn';
import React from 'react';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Skeleton = ({ children, className, ...props }: SkeletonProps) => {
  return (
    <div className={cn('animate-pulse rounded-md bg-muted', className)} {...props}>
      {children && children}
    </div>
  );
};

