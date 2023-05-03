import React from 'react';
import { FlexBoxColumn } from './ui/flexbox-column';
import { CompanyLogoIcon } from './company-logo-icon';
import { FlexBoxRow } from './ui/flexbox-row';
import { Icons } from './icons';

export const JobCard = () => {
  return (
    <FlexBoxColumn
      fullWidth
      className='relative pt-10 pl-8 pb-8 pr-2 bg-white rounded-md capitalize'
    >
      <div className='absolute -top-6 w-[50px] h-[50px] flex items-center justify-center rounded-[15px]'>
        <CompanyLogoIcon.scoot />
      </div>
      <FlexBoxRow intent={'flexStartCenter'} className='gap-3'>
        <p className='text-base text-blue-2'>5h ago</p>
        <p className='flex items-center gap-2 text-base text-blue-2'>
          <Icons.disc /> Full time
        </p>
      </FlexBoxRow>
      <h3 className='font-bold mt-3 mb-[18px] '>Senior Software Engineer</h3>
      <p className='text-base text-blue-2 mb-11'>Scoot</p>
      <h4 className='text-violet-4 font-bold'>United kingdom</h4>
    </FlexBoxColumn>
  );
};

