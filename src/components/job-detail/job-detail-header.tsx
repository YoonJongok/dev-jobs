import React from 'react';
import { FlexBoxColumn } from '../ui/flexbox-column';
import Image from 'next/image';
import { FlexBoxRow } from '../ui/flexbox-row';
import { Icons } from '../icons';
import { useJobsById } from '@/lib/hooks/use-job-by-id';
import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';

interface Props {
  jobId: string;
}

export const PostDetailHeader = ({ jobId }: Props) => {
  const { data: job, isLoading } = useJobsById(jobId.split('/')[1]);

  console.log({ job, isLoading });

  if (isLoading) {
    return <PostDetailHeaderSkeleton />;
  }

  return (
    <FlexBoxColumn
      fullWidth
      className='relative items-center pt-10 pb-8 bg-white rounded-md capitalize'
    >
      {job && (
        <>
          <div
            className='absolute -top-6 left-1/2 transform -translate-x-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-[15px] bg-contain bg-no-repeat bg-center'
            style={{ backgroundColor: job.logoBackground }}
          >
            <Image priority src={job.logo} alt='header' width={0} height={0} className='w-[30px]' />
          </div>

          <h3 className='font-bold mt-3 mb-4 '>{job?.position}</h3>
          <p className='text-base text-blue-2 mb-7'>{job?.company}</p>
          <Button intent={'secondary'}>Company Site</Button>
        </>
      )}
    </FlexBoxColumn>
  );
};

const PostDetailHeaderSkeleton = () => {
  return (
    <FlexBoxColumn
      fullWidth
      className='relative pt-11 pb-9 items-center bg-white rounded-md capitalize cursor-pointer'
    >
      <Skeleton className='absolute -top-6 left-1/2 transform -translate-x-1/2 w-[50px] h-[50px] rounded-[15px] bg-grey-2' />

      <Skeleton className='w-[250px] h-[20px] font-bold mt-3 mb-4  bg-grey-2' />
      <Skeleton className='w-[120px] h-[20px] bg-grey-2 mb-7' />
      <Button intent={'secondary'} className='w-[154px] h-[56px]' />
    </FlexBoxColumn>
  );
};

