import { FC } from 'react';
import { Link } from 'react-router-dom';

type WorkItemProps = {
  preview: {
    src: string;
    altText: string;
  };
  title: string;
  url: string;
  date: string;
  tags: string[];
  excerpt: string;
};

export const WorkItem: FC<WorkItemProps> = ({
  preview,
  title,
  url,
  date,
  tags,
  excerpt,
}) => {
  const tagList = tags.join(', ');

  return (
    <article className="flex flex-col md:flex-row items-center gap-5 border-b border-gray-200 pb-9 mb-9">
      <img className="rounded" src={preview.src} alt={preview.altText} />
      <div className="flex flex-col gap-4">
        <h3 className="font-text-200 text-3xl">
          <Link to={url}>{title}</Link>
        </h3>
        <div className="flex gap-7 items-baseline">
          <p className="font-text-300 text-white bg-dark-indigo px-2 py-0 rounded-2xl">
            {date}
          </p>
          <p className="text-light text-xl">{tagList}</p>
        </div>
        <p>{excerpt}</p>
      </div>
    </article>
  );
};
