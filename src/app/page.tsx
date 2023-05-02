import { Container } from '@/components/container';
import { SearchForm } from '@/components/search-form';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <Container>
      <SearchForm />

      <Button intent={'secondary'}>hi</Button>
    </Container>
  );
}

