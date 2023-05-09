import { create } from 'zustand';
import { Contract, Job, Location } from './jobs.types';

export type SearchExtraFiltersType = {
  location?: Location;
  isFullTime?: boolean;
};

export type SearchFiltersType = {
  jobTitle?: string;
  location?: Location;
  isFullTime?: boolean;
};

interface JobsStore {
  jobs?: Job[];
  setJobs: (jobs: Job[]) => void;
  setSearchKeyword: (keyword: string) => void;
  searchKeyword?: string;
  searchFilters?: SearchFiltersType;
  setSearchFilters: (filters: SearchFiltersType) => void;
  setExtraFilters: ({ isFullTime, location }: SearchExtraFiltersType) => void;
  extraFilters?: SearchExtraFiltersType;
  clearSearchFilters: () => void;
}

// TODO: Try to combine setSearchKeyword and ExtraFilters into one function
// For not using filter return undefined.
// In On SUbmit, deal with respectively isOpen? (keyword, filter1, filter2) closeModal : (keyword, undefined, undefined)
export const useJobsStore = create<JobsStore>((set, get) => ({
  jobs: undefined,
  searchKeyword: undefined,
  extraFilters: undefined,
  searchFilters: undefined,
  setSearchFilters: ({ jobTitle, location, isFullTime }: SearchFiltersType) => {
    jobTitle = jobTitle?.length === 0 ? undefined : jobTitle;
    location = location === 'All' ? undefined : location;
    set({ searchFilters: { jobTitle, location, isFullTime } });
  },
  setJobs: (jobs: Job[]) => set({ jobs }),
  setSearchKeyword: (keyword: string) => set({ searchKeyword: keyword }),
  setExtraFilters: ({ isFullTime, location }: SearchExtraFiltersType) => {
    location = location === 'All' ? undefined : location;
    set({ extraFilters: { isFullTime, location } });
  },

  clearSearchFilters: () =>
    set({ jobs: get().jobs, searchKeyword: undefined, extraFilters: undefined }),
}));

