import { CompanyLogoIcon } from '../company-logo-icon';
import { Icons } from '../icons';
import { FlexBoxColumn } from './flexbox-column';
import { FlexBoxRow } from './flexbox-row';
import { Skeleton } from './skeleton';

export const JobCard = () => {
  return (
    <FlexBoxColumn
      fullWidth
      className='relative pt-10 pl-8 pb-8 pr-2 bg-white rounded-md capitalize cursor-pointer'
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

JobCard.Skeleton = function JobsCardSkeleton() {
  return (
    <FlexBoxColumn
      fullWidth
      className='relative pt-10 pl-8 pb-8 pr-2 bg-white rounded-md capitalize cursor-pointer'
    >
      <Skeleton className='absolute -top-6 w-[50px] h-[50px] rounded-[15px] bg-grey-2' />

      <FlexBoxRow intent={'flexStartCenter'} className='gap-3 h-[20px]'>
        <Skeleton className='w-[56px] h-full text-base bg-grey-2' />
        <Skeleton className='w-[80px]  h-full flex items-center gap-2'>
          <Icons.disc />
          <Skeleton className='w-full h-full bg-grey-2' />
        </Skeleton>
      </FlexBoxRow>
      <Skeleton className='w-[250px] h-[20px] font-bold mt-3 mb-[18px] bg-grey-2' />
      <Skeleton className='w-[120px] h-[20px] bg-grey-2 mb-11' />
      <Skeleton className='w-[156px] h-[20px] bg-grey-2' />
    </FlexBoxColumn>
  );
};

