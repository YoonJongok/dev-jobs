'use client';
import { useQuery } from '@tanstack/react-query';
import { JOBS_MOCK_DATA } from '@/store/jobs/mock-data';
import { Job } from '@/store/jobs/jobs.types';

export const useJobs = () => {
  return useQuery<Job[]>({
    queryKey: ['jobs'],
    queryFn: () => new Promise((resolve) => resolve(JOBS_MOCK_DATA)),
  });
};

