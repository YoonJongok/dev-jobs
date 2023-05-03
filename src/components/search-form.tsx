'use client';

import React, { useState } from 'react';
import { Icons } from './icons';
import { FlexBoxRow } from './ui/flexbox-row';
import { ExtraFiltersModal } from './extra-filters-modal';

interface SearchFormProps {
  placeholder: string;
}

export const SearchForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [value, setValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setValue('');
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <form className='relative w-full'>
        <input
          placeholder='Filter by title...'
          className='w-full  py-7 px-6 bg-grey-100 dark:bg-darkmode-container rounded-xl text-base  text-lightmode-primary dark:text-white placeholder-slate-400'
          onChange={handleInputChange}
        />

        <FlexBoxRow className='items-center gap-6 absolute top-1/2 transform -translate-y-1/2 right-[16px]'>
          <FlexBoxRow intent={'flexCenterCenter'} onClick={openModal} className='cursor-pointer'>
            <Icons.filter className='w-6 h-6 fill-blue-2' />
          </FlexBoxRow>
          <button
            type='submit'
            onClick={handleSubmit}
            className='w-12 h-12 flex justify-center items-center bg-violet-4 rounded-md'
          >
            <Icons.search className='w-6 h-6 fill-white  z-20' />
          </button>
        </FlexBoxRow>

        {/* <button
        type='submit'
        onClick={handleSubmit}
      ></button> */}
      </form>

      <ExtraFiltersModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

