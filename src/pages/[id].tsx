import { useRouter } from 'next/router';
import React from 'react';

import { Section, PageDescription } from '../components';

const MovieDetailPage: React.FC = () => {
  const { query } = useRouter();
  const { id } = query;
  return (
    <PageDescription title="Detail">
      <Section>Movie Detail Page {id}</Section>
    </PageDescription>
  );
};

export default MovieDetailPage;
