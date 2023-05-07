import { SearchExtraFiltersType } from '@/store/jobs';
import { Job, Location } from '@/store/jobs/jobs.types';

export const filterJobList = (
  jobs?: Job[],
  searchKeyword?: string,
  extraFilters?: SearchExtraFiltersType
) =>
  filterJobListByKeyword(
    filterJobListByLocation(
      filterJobListByContractType(jobs, extraFilters?.contractType),
      extraFilters?.location
    ),
    searchKeyword
  );

export const filterJobListByKeyword = (jobs?: Job[], searchKeyword?: string) => {
  if (!jobs) return [];
  if (!searchKeyword) return jobs;

  const foundJobs = jobs.filter((job) =>
    job.position.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  if (foundJobs.length === 0) return [];

  return foundJobs;
};

export const filterJobListByLocation = (jobs?: Job[], location?: Location) => {
  if (!jobs) return [];
  if (!location) return jobs;

  const foundJobs = jobs.filter((job) => job.location === location);

  if (foundJobs.length === 0) return [];

  return foundJobs;
};

export const filterJobListByContractType = (jobs?: Job[], contractType?: string) => {
  if (!jobs) return [];
  if (!contractType) return jobs;

  const foundJobs = jobs.filter((job) => job.contract === contractType);

  if (foundJobs.length === 0) return [];

  return foundJobs;
};

