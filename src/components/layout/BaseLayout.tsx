import { FC } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export const BaseLayout: FC = ({ children }) => {
  return (
    <div className="min-h-screen flex justify-between flex-col py-5">
      <Header />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
};
