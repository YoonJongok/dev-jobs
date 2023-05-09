import { Combobox, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { FlexBoxRow } from '../ui/flexbox-row';
import { Icons } from '../icons';
import { Location } from '@/store/jobs/jobs.types';
import { useFormContext } from 'react-hook-form';
import { Form } from '.';
import { filterLocation } from '@/lib/utils/jobs/filter-location';

export const LocationAutocomplete = () => {
  const { register } = useFormContext<Form>();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Location>('None');

  const filteredLocation = filterLocation(query);

  const handleInputChange = (value: Location) => {
    setSelected(value);
  };

  const noMatchQuery = filteredLocation.length === 0 && query !== '';

  return (
    <Combobox value={selected} onChange={handleInputChange}>
      <div className='relative'>
        <div className='relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm'>
          <FlexBoxRow className='items-center gap-6 absolute top-1/2 transform -translate-y-1/2 left-[24px]'>
            <Icons.location className='w-6 h-6 fill-violet-4' />
          </FlexBoxRow>
          <Combobox.Input
            {...register('location')}
            placeholder='Filter by location...'
            displayValue={(location) => {
              if (location === 'None') return '';
              return location as Location;
            }}
            onChange={(event) => setQuery(event.target.value)}
            className='w-full py-7 px-6 pl-14 bg-grey-100 dark:bg-darkmode-container text-base text-black  placeholder-slate-300 border border-b-2 focus:outline-none focus:ring-0'
          />
        </div>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className='absolute mt-1 max-h-[128px] w-full overflow-y-scroll rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-30'>
            {noMatchQuery ? (
              <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
                Nothing found.
              </div>
            ) : (
              filteredLocation.map((location) => (
                <Combobox.Option
                  key={location}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
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

