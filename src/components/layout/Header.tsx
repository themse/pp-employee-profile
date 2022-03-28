import { FC } from 'react';

import { Nav } from 'components/Nav';

export const Header: FC = () => {
  return (
    <header className="header flex justify-end px-16">
      <Nav />
    </header>
  );
};
