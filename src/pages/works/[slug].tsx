import { FC } from 'react';

import { WorkContent } from 'app/works/WorkContent';
import { BaseLayout } from 'components/layout/BaseLayout';

const WorkPage: FC = () => {
  return (
    <BaseLayout>
      <section className="work">
        <WorkContent />
      </section>
    </BaseLayout>
  );
};

export default WorkPage;
