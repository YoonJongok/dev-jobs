'use client';
import React, { useEffect, useState } from 'react';
import { Icons } from '../icons';
import { FlexBoxRow } from '../ui/flexbox-row';
import { ExtraFiltersModal } from './extra-filters-modal';
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { useJobsStore } from '@/store/jobs';
import { locationSchema } from '@/store/jobs/jobs.types';

const formSchema = z.object({
  jobTitle: z.string().min(1, { message: 'Please enter a job title' }).optional(),
  location: locationSchema.optional(),
  isFullTime: z.boolean().default(false),
});

export type Form = z.infer<typeof formSchema>;

export const SearchForm = () => {
  const [isExtraFilterSet, setIsExtraFilterSet] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchJobsByFilter, setSearchKeyword] = useJobsStore((state) => [
    state.searchJobsByFilter,
    state.setSearchKeyword,
  ]);

  const methods = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobTitle: '',
      location: 'Default',
      isFullTime: false,
    },
    mode: 'onSubmit',
  });

  const { control, handleSubmit, watch } = methods;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(isExtraFiltersSubmitted = false) {
    setIsOpen(false);
    setIsExtraFilterSet(isExtraFiltersSubmitted);
  }

  const onSubmit: SubmitHandler<Form> = ({ jobTitle, isFullTime, location }) => {
    console.log({ jobTitle, isFullTime, location });
    searchJobsByFilter(jobTitle, location, isFullTime);
    if (isOpen) {
      closeModal();
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='relative w-full'>
        <Controller
          name='jobTitle'
          control={control}
          render={({ field }) => (
            <input
              {...field}
              onChange={(e) => {
                field.onChange(e);
                setSearchKeyword(e.target.value);
              }}
              placeholder='Filter by title...'
              className='w-full  py-7 px-6 rounded-xl text-base  text-black  placeholder-slate-400 focus:outline-none'
            />
          )}
        />

        <FlexBoxRow className='items-center gap-6 absolute top-1/2 transform -translate-y-1/2 right-[16px]'>
          <FlexBoxRow intent={'flexCenterCenter'} onClick={openModal} className='cursor-pointer'>
            <Icons.filter className='w-6 h-6 fill-blue-2' />
          </FlexBoxRow>
          <button
            type='submit'
            className='w-12 h-12 flex justify-center items-center bg-violet-4 rounded-md'
          >
            <Icons.search className='w-6 h-6 fill-white  z-20' />
          </button>
        </FlexBoxRow>
        <ExtraFiltersModal isOpen={isOpen} closeModal={closeModal} onSubmit={onSubmit} />
      </form>
    </FormProvider>
  );
};

