'use client';
import React from 'react';

import { useJobs } from '@/lib/hooks/use-jobs';
import { JobCard } from './ui/job-card';

export const ListJobs = () => {
  const { data, isLoading } = useJobs();
  if (isLoading) {
    return (
      <>
        {[0, 1].map((_, index) => (
          <JobCard.Skeleton key={index} />
        ))}
      </>
    );
  }

  return (
    <>
      {data?.map((job) => (
        <JobCard key={crypto.randomUUID()} job={job} />
      ))}
    </>
  );
};

