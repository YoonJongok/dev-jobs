'use client';
import React from 'react';
import { FlexBoxColumn } from '../ui/flexbox-column';
import { FlexBoxRow } from '../ui/flexbox-row';
import { Icons } from '../icons';
import { useJobDetailStore } from '@/store/job-detail';
import { Button } from '../ui/button';
import { useMediaQuery } from '@/lib/hooks/use-media-query';
import { ApplyButton } from './apply-button';

export const JobDetailBody = () => {
  const [jobDetail] = useJobDetailStore((state) => [state.jobDetail]);

  const isTablet = useMediaQuery('tablet');

  return (
    <>
      <FlexBoxColumn className='items-center py-6 px-6 tablet:px-12 mx-auto desktop:px-[165px] gap-12'>
        {jobDetail && (
          <FlexBoxColumn className='w-full bg-white  dark:bg-blue-3 px-6 py-10 gap-10  desktop:max-w-[1200px]'>
            {isTablet ? (
              <FlexBoxRow intent={'flexBetweenCenter'}>
                <FlexBoxColumn fullWidth className='rounded-md capitalize'>
                  <FlexBoxRow intent={'flexStartCenter'} className='gap-3'>
                    <p className='text-base text-blue-2'>{jobDetail.postedAt}</p>
                    <p className='flex items-center gap-2 text-base text-blue-2'>
                      <Icons.disc className='fill-blue-2' /> {jobDetail.contract}
                    </p>
                  </FlexBoxRow>
                  <h3 className='font-bold mt-2 mb-3 '>{jobDetail.position}</h3>
                  <p className='text-violet-4 font-bold mb-2'>{jobDetail.location}</p>
                </FlexBoxColumn>
                <ApplyButton
                  applyLink={jobDetail.apply}
                  className='min-w-[145px] flex justify-center items-center py-4 rounded-md bg-violet-4 text-white font-bold capitalize mb-8'
                />
              </FlexBoxRow>
            ) : (
              <>
                <FlexBoxColumn fullWidth className='rounded-md capitalize'>
                  <FlexBoxRow intent={'flexStartCenter'} className='gap-3'>
                    <p className='text-base text-blue-2'>{jobDetail.postedAt}</p>
                    <p className='flex items-center gap-2 text-base text-blue-2'>
                      <Icons.disc className='fill-blue-2' /> {jobDetail.contract}
                    </p>
                  </FlexBoxRow>
                  <h3 className='font-bold mt-2 mb-3 '>{jobDetail.position}</h3>
                  <p className='text-violet-4 font-bold mb-2'>{jobDetail.location}</p>
                </FlexBoxColumn>
                <ApplyButton
                  applyLink={jobDetail.apply}
                  className='w-full flex justify-center items-center py-4 rounded-md bg-violet-4 text-white font-bold capitalize mb-8'
                />
              </>
            )}
            <p className='text-base font-normal leading-[26px] dark:text-blue-2'>
              {jobDetail.description}
            </p>

            <FlexBoxColumn className='gap-7'>
              <h3 className='font-bold'>Requirements</h3>
              <p className='text-base font-normal leading-[26px] dark:text-blue-2'>
                {jobDetail.requirements.content}
              </p>
              <FlexBoxColumn className='gap-4'>
                {jobDetail.requirements.items.map((item, index) => (
                  <FlexBoxRow
                    key={index}
                    intent={'flexStartCenter'}
                    className='gap-9 dark:text-blue-2'
                  >
                    <Icons.disc className='w-2 fill-violet-4 self-start mt-[10px]' />
                    {item}
                  </FlexBoxRow>
                ))}
              </FlexBoxColumn>
            </FlexBoxColumn>
            <FlexBoxColumn className='gap-7'>
              <h3 className='font-bold capitalize'>What you will do</h3>
              <p className='text-base font-normal leading-[26px] dark:text-blue-2'>
                {jobDetail.role.content}
              </p>
              <FlexBoxColumn className='gap-4'>
                {jobDetail.role.items.map((item, index) => (
                  <FlexBoxRow
                    key={index}
                    intent={'flexStartCenter'}
                    className='gap-9 dark:text-blue-2'
                  >
                    <p className='text-violet-4 self-start'>{index + 1}</p>
                    {item}
                  </FlexBoxRow>
                ))}
              </FlexBoxColumn>
            </FlexBoxColumn>
          </FlexBoxColumn>
        )}
      </FlexBoxColumn>

      <FlexBoxRow
        intent={isTablet ? 'flexBetweenCenter' : 'flexCenterCenter'}
        className='mt-10 p-6 tablet:py-6 tablet:px-10 bg-white dark:bg-blue-3'
      >
        {isTablet ? (
          <>
            <FlexBoxColumn fullWidth className='rounded-md capitalize gap-3'>
              <h3 className='font-bold '>{jobDetail?.position}</h3>
              <p className='text-base text-blue-2'>{jobDetail?.company}</p>
            </FlexBoxColumn>
            <ApplyButton
              applyLink={jobDetail?.apply}
              className='min-w-[145px] flex justify-center items-center py-4 rounded-md bg-violet-4 text-white font-bold capitalize'
            />
          </>
        ) : (
          <ApplyButton
            applyLink={jobDetail?.apply}
            className='w-full flex justify-center items-center py-4 rounded-md bg-violet-4 text-white font-bold capitalize'
          />
        )}
      </FlexBoxRow>
    </>
  );
};

