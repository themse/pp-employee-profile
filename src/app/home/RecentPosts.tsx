import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Container } from 'components/Container';
import { PostItem } from 'app/components/PostItem';

import { postList } from 'app/utils/post-list';

export const RecentPosts: FC = () => {
  return (
    <section className="recent-posts bg-tertiary py-8">
      <Container>
        <div className="space-y-6">
          <div className="flex justify-between">
            <h2 className="text-xl">Recent posts</h2>
            <Link to="/blog">
              <span className="text-secondary">View all</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {postList.map((item) => (
              <PostItem key={item.url} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
