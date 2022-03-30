import { FC } from 'react';

import { BaseLayout } from 'components/layout/BaseLayout';
import { WorkList } from 'app/works/WorkList';

const WorksPage: FC = () => {
  return (
    <BaseLayout>
      <section className="works">
        <WorkList />
      </section>
    </BaseLayout>
  );
};

export default WorksPage;
