'use client';
import React, { useEffect } from 'react';
import { useJobs } from '@/lib/hooks/use-jobs';
import { JobCard } from '../ui/job-card';
import { FlexBoxColumn } from '../ui/flexbox-column';
import { useJobsStore } from '@/store/jobs';
import { filterJobList } from '@/lib/utils/jobs/filter-job-list';
import { FlexBoxRow } from '../ui/flexbox-row';

export const ListJobs = () => {
  const { data, isLoading, isSuccess } = useJobs();

  const [jobs, setJobs, searchFilters] = useJobsStore((state) => [
    state.jobs,
    state.setJobs,
    state.searchFilters,
  ]);

  const foundJobs = filterJobList(jobs, searchFilters);

  const projectExist = isSuccess && foundJobs.length > 0;

  useEffect(() => {
    if (isSuccess && data) {
      setJobs(data);
    }
  }, [data, setJobs, isSuccess]);

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
      {!isLoading && !projectExist && (
        <FlexBoxRow>
          <h3 className='font-bold text-blue-2'>No project exist</h3>
        </FlexBoxRow>
      )}
      {projectExist && foundJobs.map((job) => <JobCard key={crypto.randomUUID()} job={job} />)}
    </FlexBoxColumn>
  );
};

