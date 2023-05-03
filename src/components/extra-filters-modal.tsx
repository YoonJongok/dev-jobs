import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FlexBoxRow } from './ui/flexbox-row';
import { Icons } from './icons';
import { Button } from './ui/button';
import { FlexBoxColumn } from './ui/flexbox-column';

interface ExtraFiltersModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const ExtraFiltersModal = ({ isOpen, closeModal }: ExtraFiltersModalProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-60' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-6 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full min-w-[326px] transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all'>
                <Dialog.Title as='h3' className='text-lg font-medium leading-6 text-gray-900'>
                  <form className='relative w-full'>
                    <FlexBoxRow className='items-center gap-6 absolute top-1/2 transform -translate-y-1/2 left-[24px]'>
                      <Icons.location className='w-6 h-6 fill-violet-4' />
                    </FlexBoxRow>
                    <input
                      placeholder='Filter by location...'
                      className='w-full py-7 px-6 pl-14 bg-grey-100 dark:bg-darkmode-container text-base text-black  placeholder-slate-300 border border-b-2 focus:outline-none focus:ring-0'
                      //   onChange={handleInputChange}
                    />
                  </form>
                </Dialog.Title>
                <FlexBoxColumn className='items-start p-6 gap-6'>
                  <label
                    htmlFor='fulltime-checkbox'
                    className='flex justify-start items-center gap-4 capitalize cursor-pointer font-bold text-base'
                  >
                    <input
                      type='checkbox'
                      id='fulltime-checkbox'
                      checked={checked}
                      onChange={() => setChecked((prev) => !prev)}
                      className="cursor-pointer relative w-6 h-6 appearance-none rounded-[0.25rem] bg-grey-2 outline-none before:pointer-events-none before:absolute before:h-6 before:w-6 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0  before:content-[''] checked:border-primary checked:bg-violet-4 checked:before:opacity-[0.16] checked:after:absolute checked:after:mt-[4px] checked:after:ml-[0.5rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white"
                    />
                    Full time only
                  </label>

                  <Button type='button' fullWidth className='' onClick={closeModal}>
                    Search
                  </Button>
                </FlexBoxColumn>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

