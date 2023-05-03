'use client';
import React, { useState } from 'react';
import { FlexBoxColumn } from './ui/flexbox-column';
import { CompanyLogoIcon } from './company-logo-icon';
import { FlexBoxRow } from './ui/flexbox-row';
import { Icons } from './icons';
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

