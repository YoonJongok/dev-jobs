import { JobCard } from '@/components/job-card';
import { FlexBoxColumn } from '@/components/ui/flexbox-column';

export default function Home() {
  return (
    <FlexBoxColumn as='main' className='items-center py-14 px-6'>
      <JobCard />
    </FlexBoxColumn>
  );
}

