'use client';
import { useQuery } from '@tanstack/react-query';
import JobsData from '@/store/jobs/data.json';
import { Job } from '@/store/jobs/jobs.types';

export const useJobs = () => {
  return useQuery<Job[]>({
    queryKey: ['jobs'],
    queryFn: () => new Promise((resolve) => resolve(JobsData)),
  });
};

