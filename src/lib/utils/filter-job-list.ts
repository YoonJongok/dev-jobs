import { Job } from '@/store/jobs/jobs.types';

export const filterJobListbySearchKeword = (jobs?: Job[], searchKeyword?: string) => {
  if (!jobs) return [];
  if (!searchKeyword) return jobs;

  const foundJobs = jobs.filter((job) =>
    job.position.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  if (foundJobs.length === 0) return [];

  return foundJobs;
};

