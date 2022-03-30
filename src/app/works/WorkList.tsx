import { FC } from 'react';

import { WorkItem } from 'app/components/work-item/WorkItem';

import { workList } from 'app/utils/work-list';
import { Container } from 'components/Container';

export const WorkList: FC = () => {
  return (
    <section className="work-list my-14">
      <Container>
        <h1 className="font-text-300 text-4xl mb-6">Work</h1>
        <div>
          {workList.map((item) => (
            <WorkItem key={item.url} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};
