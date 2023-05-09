'use client';
import React, { useState } from 'react';
import { FlexBoxColumn } from '../ui/flexbox-column';
import { FlexBoxRow } from '../ui/flexbox-row';
import { Icons } from '../icons';
import { DarkModeSwitch } from './dark-mode-switch';
import Image from 'next/image';
import HeaderImage from '../../../public/images/header.png';
import { SearchForm } from '../search-form';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const homePath = usePathname() === '/';

  return (
    <header className='relative w-full'>
      <FlexBoxRow className='absolute w-full h-[136px]'>
        <Image priority src={HeaderImage} alt='header' fill className='w-full h-full -z-10' />
      </FlexBoxRow>
      <FlexBoxColumn className='pt-[32px] px-6 gap-[32px]'>
        <FlexBoxRow intent={'flexBetweenCenter'} className='bg-transparent'>
          <Link className='cursor-pointer z-10' href={'/'}>
            <Icons.logo />
          </Link>
          <FlexBoxRow intent={'flexEndCenter'} className='gap-4'>
            <DarkModeSwitch
              isDarkMode={isDarkMode}
              toggleTheme={() => {
                setIsDarkMode((prev) => !prev);
              }}
            />
          </FlexBoxRow>
        </FlexBoxRow>
        <SearchForm />
      </FlexBoxColumn>
    </header>
  );
};

