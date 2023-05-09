'use client';
import React, { useEffect, useState } from 'react';
import { Icons } from '../icons';
import { FlexBoxRow } from '../ui/flexbox-row';
import { ExtraFiltersModal } from './extra-filters-modal';
import { FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form';
import { useJobsStore } from '@/store/jobs';
import { FormType } from '.';

interface Props {
  useFormMethods: UseFormReturn<FormType>;
}

export const MobileSearchForm = ({ useFormMethods }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [setSearchFilters] = useJobsStore((state) => [state.setSearchFilters]);

  const {
    handleSubmit,
    register,
    formState: { isSubmitted },
    reset,
  } = useFormMethods;

  function closeModal() {
    setIsOpen(false);
  }

  const onSubmit: SubmitHandler<FormType> = ({ jobTitle, isFullTime, location }) => {
    setSearchFilters({ jobTitle, isFullTime, location });

    if (isOpen) {
      closeModal();
    }
  };

  useEffect(() => {
    if (!isOpen && isSubmitted) {
      reset({ isFullTime: false, location: 'All' });
    }
  }, [isOpen, isSubmitted, reset]);

  return (
    <FormProvider {...useFormMethods}>
      <form onSubmit={handleSubmit(onSubmit)} className='relative w-full'>
        <input
          {...register('jobTitle')}
          placeholder='Filter by title...'
          className='w-full  py-7 px-6 rounded-xl text-base  text-black  placeholder-slate-400 focus:outline-none'
        />

        <FlexBoxRow className='items-center gap-6 absolute top-1/2 transform -translate-y-1/2 right-[16px]'>
          <FlexBoxRow
            intent={'flexCenterCenter'}
            onClick={() => setIsOpen(true)}
            className='cursor-pointer'
          >
            <Icons.filter className='w-6 h-6 fill-blue-2' />
          </FlexBoxRow>
          <button
            type='submit'
            className='w-12 h-12 flex justify-center items-center bg-violet-4 rounded-md'
          >
            <Icons.search className='w-6 h-6 fill-white  z-20' />
          </button>
        </FlexBoxRow>
        {isOpen && (
          <ExtraFiltersModal isOpen={isOpen} closeModal={closeModal} onSubmit={onSubmit} />
        )}
      </form>
    </FormProvider>
  );
};

