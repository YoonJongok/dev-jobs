'use client';
import React from 'react';
import { Icons } from '../icons';
import { FlexBoxRow } from '../ui/flexbox-row';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';
import { useJobsStore } from '@/store/jobs';
import { LocationAutocomplete } from './location-autocomplete';
import { FormType } from '.';
import { useMediaQuery } from '@/lib/hooks/use-media-query';

interface Props {
  useFormMethods: UseFormReturn<FormType>;
}

export const DesktopSearchForm = ({ useFormMethods }: Props) => {
  const isDesktop = useMediaQuery('desktop');

  const [setSearchFilters] = useJobsStore((state) => [state.setSearchFilters]);

  const { handleSubmit, register } = useFormMethods;

  const onSubmit: SubmitHandler<FormType> = ({ jobTitle, location, isFullTime }) => {
    setSearchFilters({ jobTitle, location, isFullTime });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='relative w-full grid grid-cols-3 gap-[1.5px]  bg-grey-1 rounded-md dark:bg-blue-3'
    >
      <FlexBoxRow intent={'flexStartCenter'} className='relative'>
        <Icons.search className='absolute left-6 w-6 h-6 fill-blue-2' />
        <input
          {...register('jobTitle')}
          placeholder='Filter by title...'
          className='w-full py-7 pl-16 pr-4 rounded-l-xl dark:bg-blue-3 text-base  text-black  placeholder-slate-400 focus:outline-none dark:text-white'
        />
      </FlexBoxRow>
      <FlexBoxRow intent={'flexStartCenter'} className='relative'>
        <Icons.location className='absolute left-6 w-6 h-6 fill-blue-2' />
        <LocationAutocomplete register={register('location')} />
      </FlexBoxRow>
      <FlexBoxRow
        intent={'flexStartCenter'}
        className='relative px-6 bg-white rounded-tr-md dark:bg-blue-3'
      >
        <label
          htmlFor='fulltime-checkbox'
          className='flex justify-start items-center gap-4 capitalize cursor-pointer font-bold text-base'
        >
          <input
            {...register('isFullTime')}
            type='checkbox'
            id='fulltime-only-checkbox'
            className="cursor-pointer relative w-6 h-6 appearance-none rounded-[0.25rem] bg-grey-2 outline-none before:pointer-events-none before:absolute before:h-6 before:w-6 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0  before:content-[''] checked:border-primary checked:bg-violet-4 checked:before:opacity-[0.16] checked:after:absolute checked:after:mt-[4px] checked:after:ml-[0.5rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white dark:bg-grey-4"
          />
          {isDesktop ? 'Full Time Only' : 'Full Time'}
        </label>
        <button
          type='submit'
          className='gap-6 absolute top-1/2 transform -translate-y-1/2 right-[16px] w-12 h-12 flex justify-center items-center bg-violet-4 rounded-md'
        >
          <Icons.search className='w-6 h-6 fill-white  z-20' />
        </button>
      </FlexBoxRow>
    </form>
  );
};

