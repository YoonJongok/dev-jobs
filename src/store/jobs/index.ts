import { create } from 'zustand';
import { Job } from './jobs.types';

interface JobsStore {
  jobs?: Job[];
  getJobs: (jobs: Job[]) => void;
  searchJobsByTitle: (title: string) => void;
  searchKeyword?: string;
  setSearchKeyword: (keyword: string) => void;
}

export const useJobsStore = create<JobsStore>((set, get) => ({
  jobs: undefined,
  searchKeyword: undefined,
  getJobs: (jobs: Job[]) => set({ jobs }),
  setSearchKeyword: (keyword: string) => set({ searchKeyword: keyword }),
  searchJobsByTitle: (title: string) => {
    const jobs = get().jobs;

    if (!jobs || jobs.length === 0) {
      return set({ jobs: [] });
    }

    const filteredJobs = jobs.filter((job) =>
      job.position.toLowerCase().includes(title.toLowerCase())
    );

    set({ jobs: filteredJobs });
  },
}));

