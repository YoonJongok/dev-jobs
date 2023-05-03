'use client';
import React from 'react';

import { useJobs } from '@/lib/hooks/use-jobs';
import { JobCard } from './ui/job-card';
import { FlexBoxColumn } from './ui/flexbox-column';

export const ListJobs = () => {
  const { data, isLoading } = useJobs();

  if (isLoading) {
    return (
      <FlexBoxColumn className='items-center py-14 px-6 gap-12'>
        {[0, 1].map((_, index) => (
          <JobCard.Skeleton key={index} />
        ))}
      </FlexBoxColumn>
    );
  }

  return (
    <FlexBoxColumn className='items-center py-14 px-6 gap-12'>
      {data?.map((job) => (
        <JobCard key={crypto.randomUUID()} job={job} />
      ))}
    </FlexBoxColumn>
  );
};

