'use client';
import { useQuery } from '@tanstack/react-query';
import { JOBS_MOCK_DATA } from '@/store/jobs/mock-data';
import { Job } from '@/store/jobs/jobs.types';

const fetchJobById = async (jobId: string): Promise<Job | undefined> => {
  console.log(jobId);
  return new Promise((resolve) => resolve(JOBS_MOCK_DATA.find((job) => job.id === +jobId)));
};

export const useJobsById = (jobId: string) => {
  return useQuery<Job | undefined>({
    queryKey: ['jobDetail', jobId],
    queryFn: () => fetchJobById(jobId),
  });
};

