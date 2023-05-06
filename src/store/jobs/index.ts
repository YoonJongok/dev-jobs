import { create } from 'zustand';
import { Job, Location } from './jobs.types';

interface JobsStore {
  jobs?: Job[];
  getJobs: (jobs: Job[]) => void;
  searchJobsByFilter: (title?: string, location?: Location, isFullTime?: boolean) => void;
  searchKeyword?: string;
  setSearchKeyword: (keyword: string) => void;
}

export const useJobsStore = create<JobsStore>((set, get) => ({
  jobs: undefined,
  searchKeyword: undefined,
  getJobs: (jobs: Job[]) => set({ jobs }),
  setSearchKeyword: (keyword: string) => set({ searchKeyword: keyword }),
  searchJobsByFilter: (title?: string, location?: Location, isFullTime = false) => {
    const jobs = get().jobs;

    if (!jobs || jobs.length === 0) {
      return set({ jobs: [] });
    }

    const filteredJobs = jobs.filter((job) => {
      return (
        title &&
        job.position.toLowerCase().includes(title.toLowerCase()) &&
        location &&
        job.location === location &&
        isFullTime &&
        job.contract === 'Full Time'
      );
    });

    console.log('filteredJobs', filteredJobs);

    set({ jobs: filteredJobs || [] });
  },
  // TODO: Clear search filters including 3 criterias: title, location, isFullTime
}));

