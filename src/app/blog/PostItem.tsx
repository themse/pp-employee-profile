import { FC } from 'react';
import { Link } from 'react-router-dom';

type PostItemProps = {
  title: string;
  url: string;
  date: string;
  tags: string[];
  excerpt: string;
};

export const PostItem: FC<PostItemProps> = ({
  title,
  url,
  date,
  tags,
  excerpt,
}) => {
  const tagList = tags.join(', ');

  return (
    <article className="border-b border-gray-200 pb-9 mb-9 space-y-4">
      <h3 className="font-text-100 text-3xl">
        <Link to={url}>{title}</Link>
      </h3>
      <div className="flex xs:flex-col flex-row">
        <p className="text-xl sm:after:content-['|'] sm:after:px-5">{date}</p>
        <p className="text-xl text-light">{tagList}</p>
      </div>
      <p>{excerpt}</p>
    </article>
  );
};
