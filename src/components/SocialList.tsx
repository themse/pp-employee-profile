import { FC } from 'react';

import { Icon } from './Icon';

const socialList = [
  {
    title: 'Facebook',
    src: '/icons/facebook.svg',
    href: 'https://www.facebook.com/',
  },
  {
    title: 'Instagram',
    src: '/icons/instagram.svg',
    href: 'https://www.instagram.com/',
  },
  {
    title: 'Twitter',
    src: '/icons/twitter.svg',
    href: 'https://twitter.com/',
  },
  {
    title: 'Linkedin',
    src: '/icons/linkedin.svg',
    href: 'https://www.linkedin.com/',
  },
];

export const SocialList: FC = () => {
  return (
    <div className="flex space-x-9">
      {socialList.map(({ title, src, href }) => (
        <a key={href} href={href} target="_blank" rel="noreferrer">
          <span className="block w-8 h-8">
            {<Icon src={src} title={title} />}
          </span>
        </a>
      ))}
    </div>
  );
};
