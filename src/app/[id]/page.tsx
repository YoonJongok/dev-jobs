import { JobDetailBody } from '@/components/job-detail/job-detail-body';
import { FlexBoxColumn } from '@/components/ui/flexbox-column';

export default function PostDetail() {
  return (
    <FlexBoxColumn as='main'>
      <JobDetailBody />
    </FlexBoxColumn>
  );
}

