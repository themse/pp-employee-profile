import { FC } from 'react';

import { WorkItem } from 'app/works/WorkItem';
import { Container } from 'components/Container';

import { workList } from 'app/utils/work-list';

export const FeaturedWorks: FC = () => {
  return (
    <section className="featured-works py-8">
      <Container>
        <div className="space-y-9">
          <h2 className="text-xl">Featured works</h2>
          <div>
            {workList.map((item) => (
              <WorkItem key={item.url} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
