import { create } from 'zustand';
import { Job } from '../jobs/jobs.types';

interface JobDetailStore {
  jobDetail?: Job;
  setJobDetail: (job: Job) => void;
}

export const useJobDetailStore = create<JobDetailStore>((set, get) => ({
  jobDetail: undefined,
  setJobDetail: (job: Job) => set({ jobDetail: job }),
}));

