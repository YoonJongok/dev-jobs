'use client';
import { useQuery } from '@tanstack/react-query';
import JobsData from '@/store/jobs/data.json';

// const fetchJobs = (): Promise<Job[]> => {
//   return new ;
// };

export const useJobs = () => {
  return useQuery({
    queryKey: ['jobs'],
    queryFn: () => new Promise((resolve) => resolve(JobsData)),
  });
};

