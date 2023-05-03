import { cn } from '@/lib/utils/cn';
import { Switch } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';
import { FlexBoxRow } from './ui/flexbox-row';
import { Icons } from './icons';

interface DarkModeSwitchProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const DarkModeSwitch: React.FC<DarkModeSwitchProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <FlexBoxRow intent={'flexEndCenter'} className='gap-4'>
      <Icons.moon className='fill-white' />
      <Switch
        checked={isDarkMode}
        onChange={toggleTheme}
        className={clsx(
          'cursur-pointer relative inline-flex px-[2px] items-center h-[24px] w-[48px] shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 bg-white'
        )}
      >
        <span
          className={cn(
            'cursur-pointer inline-block h-[14px] w-[14px] transform rounded-full bg-violet-4 shadow-lg ring-0 transition duration-200 ease-in-out',
            {
              'translate-x-[25px]': isDarkMode,
              'translate-x-[1px]': !isDarkMode,
            }
          )}
        />
      </Switch>
      <Icons.sun className='fill-white' />
    </FlexBoxRow>
  );
};

