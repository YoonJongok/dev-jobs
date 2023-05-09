'use client';
import React, { useEffect, useState } from 'react';
import { Icons } from '../icons';
import { FlexBoxRow } from '../ui/flexbox-row';
import { ExtraFiltersModal } from './extra-filters-modal';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { useJobsStore } from '@/store/jobs';
import { locationSchema } from '@/store/jobs/jobs.types';

const formSchema = z.object({
  jobTitle: z.string().min(1, { message: 'Please enter a job title' }),
  location: locationSchema.optional(),
  isFullTime: z.boolean().default(false),
});

export type Form = z.infer<typeof formSchema>;

export const DesktopSearchForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [setExtraFilters, setSearchKeyword, clearSearchFilters] = useJobsStore((state) => [
    state.setExtraFilters,
    state.setSearchKeyword,
    state.clearSearchFilters,
  ]);

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitted },
  } = useForm<Form>({
    resolver: zodResolver(formSchema),
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<Form> = ({ jobTitle, isFullTime, location }) => {
    console.log({ jobTitle, isFullTime, location });
    // clearSearchFilters();

    // if (isOpen) {
    //   setExtraFilters({ isFullTime, location });
    //   // setExtraFilters({ location, isFullTime });
    // } else {
    //   setSearchKeyword(jobTitle);
    // }
  };

  console.log(isSubmitted);

  useEffect(() => {
    if (isSubmitted) {
      reset();
    }
  }, [isSubmitted, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='relative w-full grid grid-cols-3 gap-[1px]  bg-grey-1 rounded-md'
    >
      <FlexBoxRow intent={'flexStartCenter'} className='relative cursor-pointer'>
        <Icons.search className='absolute left-6 w-6 h-6 fill-blue-2' />
        <input
          {...register('jobTitle')}
          placeholder='Filter by title...'
          className='w-full py-7 pl-16 pr-4 rounded-l-xl text-base  text-black  placeholder-slate-400 focus:outline-none'
        />
      </FlexBoxRow>
      <FlexBoxRow intent={'flexStartCenter'} className='relative cursor-pointer'>
        <Icons.location className='absolute left-6 w-6 h-6 fill-blue-2' />
        <input
          {...register('location')}
          placeholder='Filter by location...'
          className='w-full py-7 pl-16 pr-4 text-base  text-black  placeholder-slate-400 focus:outline-none'
        />
      </FlexBoxRow>
      <FlexBoxRow
        intent={'flexStartCenter'}
        className='relative px-6 cursor-pointer bg-white rounded-tr-md '
      >
        <label
          htmlFor='fulltime-checkbox'
          className='flex justify-start items-center gap-4 capitalize cursor-pointer font-bold text-base'
        >
          <input
            {...register('isFullTime')}
            type='checkbox'
            id='fulltime-checkbox'
            // checked={checked}
            // onChange={handleCheckboxChange}
            className="cursor-pointer relative w-6 h-6 appearance-none rounded-[0.25rem] bg-grey-2 outline-none before:pointer-events-none before:absolute before:h-6 before:w-6 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0  before:content-[''] checked:border-primary checked:bg-violet-4 checked:before:opacity-[0.16] checked:after:absolute checked:after:mt-[4px] checked:after:ml-[0.5rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white"
          />
          Full time only
        </label>
        <FlexBoxRow className='items-center gap-6 absolute top-1/2 transform -translate-y-1/2 right-[16px]'>
          <button
            type='submit'
            className='w-12 h-12 flex justify-center items-center bg-violet-4 rounded-md'
          >
            <Icons.search className='w-6 h-6 fill-white  z-20' />
          </button>
        </FlexBoxRow>
      </FlexBoxRow>
    </form>
  );
};

