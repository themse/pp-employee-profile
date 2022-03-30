import { Container } from 'components/Container';
import { FC } from 'react';
import { PostItem } from './PostItem';

const postList = [
  {
    title: 'UI Interactions of the week',
    url: '/ui-interactions-of-the-week-1',
    date: '12 Feb 2019',
    tags: ['Express', 'Handlebars'],
    excerpt:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
  {
    title: 'UI Interactions of the week',
    url: '/ui-interactions-of-the-week-2',
    date: '12 Feb 2019',
    tags: ['Express', 'Handlebars'],
    excerpt:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
  {
    title: 'UI Interactions of the week',
    url: '/ui-interactions-of-the-week-3',
    date: '12 Feb 2019',
    tags: ['Express', 'Handlebars'],
    excerpt:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
  {
    title: 'UI Interactions of the week-4',
    url: '/ui-interactions-of-the-week',
    date: '12 Feb 2019',
    tags: ['Express', 'Handlebars'],
    excerpt:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
];

export const PostList: FC = () => {
  return (
    <section className="post-list my-14">
      <Container>
        <h1 className="font-text-300 text-4xl mb-6">Blog</h1>
        <div>
          {postList.map((item) => (
            <PostItem key={item.url} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};
