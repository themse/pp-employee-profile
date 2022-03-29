import { FC } from 'react';

import { WorkItem } from 'app/components/work-item/WorkItem';
import { Container } from 'components/Container';

const workList = [
  {
    preview: {
      src: '/images/blog/article-1.jpg',
      altText: 'Designing Dashboards',
    },
    title: 'Designing Dashboards',
    url: '/designing-dashboards',
    date: '2020',
    tags: ['Dashboard'],
    excerpt:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
  {
    preview: {
      src: '/images/blog/article-2.jpg',
      altText: 'Vibrant Portraits of 2020',
    },
    title: 'Vibrant Portraits of 2020',
    url: '/vibrant-portraits-of-2020',
    date: '2018',
    tags: ['Illustration'],
    excerpt:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
  {
    preview: {
      src: '/images/blog/article-3.jpg',
      altText: '36 Days of Malayalam type',
    },
    title: '36 Days of Malayalam type',
    url: '/36-days-of-malayalam-type',
    date: '2018',
    tags: ['Typography'],
    excerpt:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
];

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
