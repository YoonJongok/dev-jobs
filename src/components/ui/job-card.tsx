'use client';
import { Job } from '@/store/jobs/jobs.types';
import { Icons } from '../icons';
import { FlexBoxColumn } from './flexbox-column';
import { FlexBoxRow } from './flexbox-row';
import { Skeleton } from './skeleton';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  job: Job;
}

export const JobCard = ({ job }: Props) => {
  const router = useRouter();

  return (
    <FlexBoxColumn
      fullWidth
      className='relative pt-10 pl-8 pb-8 pr-2 bg-white dark:bg-blue-3 rounded-md capitalize cursor-pointer'
      onClick={() => router.push(`/${job.id}`)}
    >
      <div
        className='absolute -top-6 w-[50px] h-[50px] flex items-center justify-center rounded-[15px] bg-contain bg-no-repeat bg-center'
        style={{ backgroundColor: job.logoBackground }}
      >
        <Image priority src={job.logo} alt='header' width={0} height={0} className='w-[30px]' />
      </div>
      <FlexBoxRow intent={'flexStartCenter'} className='gap-3'>
        <p className='text-base text-blue-2'>{job.postedAt}</p>
        <p className='flex items-center gap-2 text-base text-blue-2'>
          <Icons.disc className='fill-blue-2' /> {job.contract}
        </p>
      </FlexBoxRow>
      <h3 className='font-bold mt-3 mb-[18px] '>{job.position}</h3>
      <p className='text-base text-blue-2 mb-11'>{job.company}</p>
      <h4 className='text-violet-4 font-bold'>{job.location}</h4>
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
          <Icons.disc className='fill-blue-2' />
          <Skeleton className='w-full h-full bg-grey-2' />
        </Skeleton>
      </FlexBoxRow>
      <Skeleton className='w-[250px] h-[20px] font-bold mt-3 mb-[18px] bg-grey-2' />
      <Skeleton className='w-[120px] h-[20px] bg-grey-2 mb-11' />
      <Skeleton className='w-[156px] h-[20px] bg-grey-2' />
    </FlexBoxColumn>
  );
};

