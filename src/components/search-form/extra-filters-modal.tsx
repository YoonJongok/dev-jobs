import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Button } from '../ui/button';
import { FlexBoxColumn } from '../ui/flexbox-column';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { LocationAutocomplete } from './location-autocomplete';
import { FormType } from '.';

interface ExtraFiltersModalProps {
  isOpen: boolean;
  closeModal: () => void;
  onSubmit: SubmitHandler<FormType>;
}

export const ExtraFiltersModal = ({ isOpen, closeModal, onSubmit }: ExtraFiltersModalProps) => {
  const { register, handleSubmit } = useFormContext<FormType>();

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
          <div className='fixed inset-0 bg-black  bg-opacity-60 ' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto '>
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
                <Dialog.Title as='h3' className='text-lg font-medium leading-6 text-gray-900  '>
                  <FlexBoxColumn className='relative w-full  dark:bg-blue-3 '>
                    <LocationAutocomplete register={register('location')} />
                  </FlexBoxColumn>
                </Dialog.Title>
                <FlexBoxColumn className='items-start p-6 gap-6 dark:bg-blue-3'>
                  <label
                    htmlFor='fulltime-checkbox'
                    className='flex justify-start items-center gap-4 capitalize cursor-pointer font-bold text-base'
                  >
                    <input
                      {...register('isFullTime')}
                      type='checkbox'
                      id='fulltime-checkbox'
                      className="cursor-pointer relative w-6 h-6 appearance-none rounded-[0.25rem] bg-grey-2 dark:bg-grey-4 outline-none before:pointer-events-none before:absolute before:h-6 before:w-6 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0  before:content-[''] checked:border-primary checked:bg-violet-4 checked:before:opacity-[0.16] checked:after:absolute checked:after:mt-[4px] checked:after:ml-[0.5rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white"
                    />
                    Full time only
                  </label>

                  <Button
                    type='submit'
                    fullWidth
                    className='w-full h-12 flex justify-center items-center bg-violet-4 rounded-md text-white'
                    onClick={handleSubmit(onSubmit)}
                  >
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

