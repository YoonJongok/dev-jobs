import { Combobox, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { FlexBoxRow } from '../ui/flexbox-row';
import { Icons } from '../icons';
import { Location } from '@/store/jobs/jobs.types';
import { UseFormRegisterReturn } from 'react-hook-form';
import { filterLocation } from '@/lib/utils/jobs/filter-location';

interface Props {
  register: UseFormRegisterReturn;
}

export const LocationAutocomplete = ({ register }: Props) => {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Location>('All');

  const filteredLocation = filterLocation(query);
  const noMatchQuery = filteredLocation.length === 0 && query !== '';

  const handleInputChange = (value: Location) => {
    setSelected(value);
  };

  return (
    <Combobox value={selected} onChange={handleInputChange}>
      <div className='relative tablet:w-full'>
        <div className='relative w-full cursor-default overflow-hidden rounded-lg tablet:rounded-none dark:text-white text-left shadow-sm tablet:shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm'>
          <FlexBoxRow className='items-center gap-6 absolute top-1/2 transform -translate-y-1/2 left-[24px]'>
            <Icons.location className='w-6 h-6 fill-violet-4' />
          </FlexBoxRow>
          <Combobox.Input
            {...register}
            placeholder='Filter by location...'
            displayValue={(location) => {
              return location as Location;
            }}
            onChange={(event) => setQuery(event.target.value)}
            className='w-full py-7 px-6 pl-14 bg-grey-100 bg-white dark:bg-blue-3  text-base text-black dark:text-white  placeholder-slate-300 border border-b-2 dark:border-none tablet:border-none focus:outline-none focus:ring-0'
          />
        </div>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className='absolute mt-1 max-h-[128px] w-full overflow-y-scroll rounded-sm bg-white dark:bg-blue-3  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-30'>
            {noMatchQuery ? (
              <div className='relative cursor-default select-none py-2 px-4 text-gray-700  dark:text-white'>
                Nothing found.
              </div>
            ) : (
              filteredLocation.map((location) => (
                <Combobox.Option
                  key={location}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 dark:text-white ${
                      active ? 'bg-violet-4 text-white' : 'text-gray-900'
                    }`
                  }
                  value={location}
                >
                  {({ selected }) => (
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {location}
                    </span>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

