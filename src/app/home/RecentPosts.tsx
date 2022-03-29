import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Container } from 'components/Container';
import { PostItem } from 'app/components/PostItem';

const postList = [
  {
    title: 'Making a design system from scratch',
    url: '/making-a-design-system-from-scratch',
    date: '12 Feb 2020',
    tags: ['Design', 'Pattern'],
    excerpt:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
  {
    title: 'Creating pixel perfect icons in Figma',
    url: '/creating-pixel-perfect-icons-in-figma',
    date: '12 Feb 2020',
    tags: ['Figma', 'Icon Design'],
    excerpt:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
];

export const RecentPosts: FC = () => {
  return (
    <section className="recent-posts bg-tertiary py-8">
      <Container>
        <div className="space-y-6">
          <div className="flex justify-between">
            <h2 className="text-xl">Recent posts</h2>
            <Link to="#">
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
