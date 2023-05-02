'use client';
import React, { useState } from 'react';
import { FlexBoxColumn } from './ui/flexbox-column';
import { FlexBoxRow } from './ui/flexbox-row';
import { Icons } from './icons';
import { DarkModeSwitch } from './dark-mode-switch';

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <header className='relative w-full'>
      <FlexBoxColumn>
        <FlexBoxRow intent={'flexBetweenCenter'} className='bg-transparent'>
          <Icons.logo />
          <FlexBoxRow intent={'flexEndCenter'} className='gap-4'>
            <Icons.sun />
            <DarkModeSwitch
              isDarkMode={isDarkMode}
              toggleTheme={() => {
                setIsDarkMode((prev) => !prev);
              }}
            />
            <Icons.moon />
          </FlexBoxRow>
        </FlexBoxRow>
      </FlexBoxColumn>
    </header>
  );
};

