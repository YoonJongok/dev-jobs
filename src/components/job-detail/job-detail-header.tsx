import React, { useEffect } from 'react';
import { FlexBoxColumn } from '../ui/flexbox-column';
import Image from 'next/image';
import { useJobsById } from '@/lib/hooks/use-job-by-id';
import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';
import { useJobDetailStore } from '@/store/job-detail';
import { useMediaQuery } from '@/lib/hooks/use-media-query';
import { FlexBoxRow } from '../ui/flexbox-row';

interface Props {
  jobId: string;
}

export const JobDetailHeader = ({ jobId }: Props) => {
  const { data: job, isSuccess } = useJobsById(jobId.split('/')[1]);
  const [setJobDetail] = useJobDetailStore((state) => [state.setJobDetail]);

  const isTablet = useMediaQuery('tablet');

  useEffect(() => {
    if (isSuccess && job) {
      setJobDetail(job);
    }
  }, [isSuccess, job, setJobDetail]);

  if (isTablet) {
    return (
      <div className='w-full desktop:max-w-[1200px] mx-auto relative grid grid-cols-5 items-center  bg-white dark:bg-blue-3 rounded-md capitalize'>
        {job && (
          <>
            <div
              className='col-span-1 w-full h-full bg-no-repeat bg-cover  bg-center flex justify-center items-center rounded-l-md'
              style={{ backgroundColor: job.logoBackground }}
            >
              <Image priority src={job.logo} alt='header' width={0} height={0} className='w-1/3 ' />
            </div>
            <FlexBoxRow
              intent={'flexBetweenCenter'}
              fullWidth
              className='col-start-2 col-end-6 p-10 dark:bg-blue-3'
            >
              <FlexBoxColumn>
                <h2 className='font-bold '>{job?.position}</h2>
                <p className='text-base text-blue-2'>{job?.company}</p>
              </FlexBoxColumn>
              <Button intent={'secondary'}>Company Site</Button>
            </FlexBoxRow>
          </>
        )}
      </div>
    );
  }

  return (
    <FlexBoxColumn
      fullWidth
      className='relative items-center pt-10 pb-8 bg-white dark:bg-blue-3  rounded-md capitalize'
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

