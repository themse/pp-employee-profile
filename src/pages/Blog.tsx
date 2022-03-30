import { FC } from 'react';

import { BaseLayout } from 'components/layout/BaseLayout';
import { PostList } from 'app/blog/PostList';

const BlogPage: FC = () => {
  return (
    <BaseLayout>
      <section className="blog">
        <PostList />
      </section>
    </BaseLayout>
  );
};

export default BlogPage;
