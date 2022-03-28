import { FC } from 'react';

import { Facebook } from 'components/icons/Facebook';
import { Instagram } from 'components/icons/Instagram';
import { Linkedin } from 'components/icons/Linkedin';
import { Twitter } from 'components/icons/Twitter';

const socialList = [
  {
    Icon: Facebook,
    href: '/facebook',
  },
  {
    Icon: Instagram,
    href: '/instagram',
  },
  {
    Icon: Twitter,
    href: '/twitter',
  },
  {
    Icon: Linkedin,
    href: '/linkedin',
  },
];

export const SocialList: FC = () => {
  return (
    <div className="flex space-x-9">
      {socialList.map(({ Icon, href }) => (
        <a key={href} href={href} target="_blank" rel="noreferrer">
          <span className="block w-8 h-8">{<Icon />}</span>
        </a>
      ))}
    </div>
  );
};
