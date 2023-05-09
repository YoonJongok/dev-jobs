import { Location } from '@/store/jobs/jobs.types';

export const locationArray: Location[] = [
  'All',
  'United Kingdom',
  'United States',
  'Russia',
  'Japan',
  'Germany',
  'New Zealand',
  'Singapore',
];

export const filterLocation = (query: string) => {
  return query === ''
    ? locationArray
    : locationArray.filter((location) =>
        location.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
      );
};

