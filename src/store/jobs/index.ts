import { create } from 'zustand';
import { Job, Location } from './jobs.types';

export type SearchFiltersType = {
  jobTitle?: string;
  location?: Location;
  isFullTime?: boolean;
};

interface JobsStore {
  jobs?: Job[];
  searchFilters?: SearchFiltersType;
  setJobs: (jobs: Job[]) => void;
  setSearchFilters: (filters: SearchFiltersType) => void;
  clearSearchFilters: () => void;
}

export const useJobsStore = create<JobsStore>((set, get) => ({
  jobs: undefined,
  searchFilters: undefined,
  setSearchFilters: ({ jobTitle, location, isFullTime }: SearchFiltersType) => {
    jobTitle = jobTitle?.length === 0 ? undefined : jobTitle;
    location = location === 'All' ? undefined : location;
    set({ searchFilters: { jobTitle, location, isFullTime } });
  },
  setJobs: (jobs: Job[]) => set({ jobs }),
  clearSearchFilters: () => set({ jobs: get().jobs }),
}));

