'use client';
import { cn } from '@/lib/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
  [
    'min-w-[145px]',
    'flex',
    'justify-center',
    'items-center',
    'rounded-[5px]',
    'capitalize',
    'text-base',
    'font-bold',
    'border-transparent',
    'dark:bg-violet-4',
    'dark:hover:bg-violet-3',
    'dark:text-white',
    'dark:border-transparent',
  ],
  {
    variants: {
      intent: {
        primary: ['bg-violet-4', 'hover:bg-violet-3', 'text-white', 'border-transparent'],
        secondary: ['bg-violet-1', 'hover:bg-violet-2', 'text-violet-4', 'border-transparent'],
      },
      size: {
        base: ['px-6', 'py-4'],
      },
      fullWidth: {
        true: ['w-full'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'base',
    },
    compoundVariants: [
      {
        intent: ['primary', 'secondary'],
        size: 'base',
      },
    ],
  }
);

export interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {}

export const Button = ({
  className,
  intent,
  fullWidth,
  children,
  ...props
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button className={cn(buttonVariants({ intent, fullWidth, className }))} {...props}>
      {children}
    </button>
  );
};

