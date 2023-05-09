import { ListJobs } from '@/components/home/list-jobs';
import { FlexBoxColumn } from '@/components/ui/flexbox-column';

export default function Home() {
  return (
    <FlexBoxColumn as='main'>
      <ListJobs />
    </FlexBoxColumn>
  );
}

