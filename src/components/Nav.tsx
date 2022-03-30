import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Icon } from './Icon';

const navigation = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/works',
    title: 'Works',
  },
  {
    href: '/blog',
    title: 'Blog',
  },
];

const $body = document.body;

export const Nav: FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const icon = showMenu ? (
    <Icon width={30} height={30} title="menu-close" src="/icons/close.svg" />
  ) : (
    <Icon width={30} height={30} title="menu-burger" src="/icons/burger.svg" />
  );

  const handleMenu = (): void => {
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    if (showMenu) {
      $body.classList.add('overflow-hidden');
    } else {
      $body.classList.remove('overflow-hidden');
    }
  }, [showMenu]);

  return (
    <nav>
      <button
        type="button"
        className="absolute top-5 right-5 md:hidden z-20"
        onClick={handleMenu}
      >
        <span className="sr-only">Open main menu</span>
        {icon}
      </button>
      <ul
        className={`${
          showMenu ? 'flex' : 'hidden'
        } absolute top-0 left-0 right-0 bottom-0 h-screen md:h-auto z-10 md:static md:flex flex-col justify-center items-center gap-y-5 md:gap-y-0 backdrop-blur-xl md:flex-row md:gap-x-5`}
      >
        {navigation.map((item) => (
          <li key={item.href}>
            <Link to={item.href}>
              <span className="font-text-300 md:font-text-100 text-3xl md:text-xl hover:text-primary">
                {item.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
