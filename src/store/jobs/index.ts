import { create } from 'zustand';
import { Contract, Job, Location } from './jobs.types';

type SearchJobByFilterType = {
  jobTitle?: string;
  location?: Location;
  contractType?: Contract;
};

export type SearchExtraFiltersType = {
  location?: Location;
  contractType?: Contract;
};

interface JobsStore {
  jobs?: Job[];
  setJobs: (jobs: Job[]) => void;
  // searchJobsByFilter: ({ jobTitle, location, contractType }: SearchJobByFilterType) => void;
  setSearchKeyword: (keyword: string) => void;
  searchKeyword?: string;
  setExtraFilters: ({ contractType, location }: SearchExtraFiltersType) => void;
  extraFilters?: SearchExtraFiltersType;
  clearSearchFilters: () => void;
}

export const useJobsStore = create<JobsStore>((set, get) => ({
  jobs: undefined,
  searchKeyword: undefined,
  extraFilters: undefined,
  setJobs: (jobs: Job[]) => set({ jobs }),
  setSearchKeyword: (keyword: string) => set({ searchKeyword: keyword }),
  setExtraFilters: ({ contractType, location }: SearchExtraFiltersType) =>
    set({ extraFilters: { contractType, location } }),
  // searchJobsByFilter: ({ jobTitle, location, contractType }: SearchJobByFilterType) => {
  //   const jobs = get().jobs;

  //   if (!jobs || jobs.length === 0) {
  //     return set({ jobs: [] });
  //   }

  //   console.log({ jobTitle, location, contractType });
  //   const filteredJobs = jobs.filter((job) => {
  //     return (
  //       jobTitle &&
  //       job.position.toLowerCase().includes(jobTitle.toLowerCase()) &&
  //       location &&
  //       job.location === location &&
  //       contractType &&
  //       job.contract === contractType
  //     );
  //   });

  //   set({ jobs: filteredJobs });
  // },
  // TODO: when the user is clearing the search input, returns all jobs.
  // TODO: Clear search filters including 3 criterias: title, location, isFullTime.
  clearSearchFilters: () =>
    set({ jobs: get().jobs, searchKeyword: undefined, extraFilters: undefined }),
}));

