'use client';
import React from 'react';
import { useMediaQuery } from '@/lib/hooks/use-media-query';
import { DesktopSearchForm } from './desktop-search-form';
import { MobileSearchForm } from './mobile-search-form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { locationSchema } from '@/store/jobs/jobs.types';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  jobTitle: z.string(),
  location: locationSchema,
  isFullTime: z.boolean(),
});

export type FormType = z.infer<typeof formSchema>;

export const SearchForm = () => {
  const isTablet = useMediaQuery('tablet');

  const methods = useForm<FormType>({
    defaultValues: {
      jobTitle: '',
      location: 'All',
      isFullTime: false,
    },
    resolver: zodResolver(formSchema),
  });

  if (isTablet) {
    return <DesktopSearchForm useFormMethods={methods} />;
  }

  return <MobileSearchForm useFormMethods={methods} />;
};

