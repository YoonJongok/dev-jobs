import { ListJobs } from '@/components/list-jobs';
import { FlexBoxColumn } from '@/components/ui/flexbox-column';

export default function Home() {
  return (
    <FlexBoxColumn as='main' className='items-center py-14 px-6 gap-8'>
      <ListJobs />
    </FlexBoxColumn>
  );
}

