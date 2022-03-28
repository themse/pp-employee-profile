import { FC } from 'react';

import { SocialList } from 'components/SocialList';

const startYear = 2020;
const currentYear = new Date().getFullYear();

const rangeYear =
  currentYear > startYear ? `${startYear} - ${currentYear}` : currentYear;

export const Footer: FC = () => {
  return (
    <footer className="footer flex justify-center items-center h-44 flex-col space-y-6">
      <SocialList />
      <small className="text-sm">
        Copyright ©{rangeYear} All rights reserved
      </small>
    </footer>
  );
};
