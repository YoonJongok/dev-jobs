import { ListJobs } from '@/components/list-jobs';
import { FlexBoxColumn } from '@/components/ui/flexbox-column';

export default function Home() {
  return (
    <FlexBoxColumn as='main'>
      <ListJobs />
    </FlexBoxColumn>
  );
}

