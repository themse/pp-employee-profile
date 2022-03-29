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
    <article className="bg-white rounded p-6 space-y-5">
      <h3 className="font-text-200 text-2xl leading-9">
        <Link to={url}>{title}</Link>
      </h3>
      <div className="flex xs:flex-col flex-row">
        <p className="sm:after:content-['|'] sm:after:px-5">{date}</p>
        <p>{tagList}</p>
      </div>
      <p>{excerpt}</p>
    </article>
  );
};
