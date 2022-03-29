import { FC } from 'react';

import { Bio } from 'app/components/Bio';
import { BaseLayout } from 'components/layout/BaseLayout';
import { RecentPosts } from 'app/home/RecentPosts';
import { FeaturedWorks } from 'app/home/FeaturedWorks';

const HomePage: FC = () => {
  return (
    <BaseLayout>
      <section className="home">
        <Bio />
        <RecentPosts />
        <FeaturedWorks />
      </section>
    </BaseLayout>
  );
};

export default HomePage;
