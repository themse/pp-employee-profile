import { FC } from 'react';

import { Button } from 'components/Button';
import { Container } from 'components/Container';

export const Bio: FC = () => {
  return (
    <section className="bio min-h-screen flex items-center">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10">
          <div className="space-y-10 order-last md:-order-last flex flex-col items-center md:block">
            <h1 className="font-text-200 text-4xl text-center md:text-left">
              Hi, I am John,
              <span className="block">Creative Technologist</span>
            </h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <Button>Download Resume</Button>
          </div>
          <div className="mx-auto min-w-250">
            <img
              className="w-full drop-shadow-xl"
              src="/images/avatar.png"
              alt="avatar"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
