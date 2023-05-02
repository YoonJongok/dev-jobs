'use client';

import React, { useState } from 'react';
import { Icons } from './icons';

interface SearchFormProps {
  placeholder: string;
}

export const SearchForm = () => {
  const [value, setValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setValue('');
  };

  return (
    <form className='relative w-full'>
      <span className='absolute top-1/2 transform -translate-y-1/2 left-8'>
        <Icons.search className='w-6 h-6 fill-violet-4' />
      </span>
      <input
        placeholder='Search vocabulary'
        className='w-full  py-7 pl-[70px] pr-8 bg-grey-100 dark:bg-darkmode-container rounded-xl text-base  text-lightmode-primary dark:text-white placeholder-slate-400'
        onChange={handleInputChange}
      />
      {/* <button
        type='submit'
        onClick={handleSubmit}
      ></button> */}
    </form>
  );
};

