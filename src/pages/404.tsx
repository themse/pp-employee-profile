import { Container } from 'components/Container';
import { BaseLayout } from 'components/layout/BaseLayout';
import { FC } from 'react';

const PageNotFound: FC = () => {
  return (
    <BaseLayout>
      <section className="404 min-h-screen flex items-center">
        <Container>
          <h1 className="text-center">404 Page Not Found</h1>
        </Container>
      </section>
    </BaseLayout>
  );
};

export default PageNotFound;
