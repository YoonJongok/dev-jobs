'use client';
import { cn } from '@/lib/utils';
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
  ],
  {
    variants: {
      intent: {
        primary: ['bg-violet-4', 'hover:bg-violet-3', 'text-white', 'border-transparent'],
        secondary: ['bg-violet-1', 'hover:bg-violet-2', 'text-violet-4', 'border-transparent'],
        dark: ['bg-grey-4', 'hover:bg-grey-3', 'text-white'],
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
        intent: ['dark', 'primary', 'secondary'],
        size: 'base',
      },
    ],
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export const Button = ({ className, intent, fullWidth, children, ...props }: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ intent, fullWidth, className }))} {...props}>
      {children}
    </button>
  );
};

