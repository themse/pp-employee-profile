import { FC } from 'react';

import { Bio } from 'app/components/bio/Bio';
import { BaseLayout } from 'components/layout/BaseLayout';

const HomePage: FC = () => {
  return (
    <BaseLayout>
      <section className="home">
        <Bio />
      </section>
    </BaseLayout>
  );
};

export default HomePage;
