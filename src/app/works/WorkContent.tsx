import { FC } from 'react';

import { Container } from 'components/Container';

export const WorkContent: FC = () => {
  return (
    <Container>
      <div className="work-content space-y-8 my-14">
        <h1 className="font-text-200 text-3xl leading-10">
          Designing Dashboards with usability in mind
        </h1>
        <div className="flex gap-7 items-baseline">
          <p className="text-xl font-text-300 text-white bg-year px-2 py-0 rounded-2xl">
            2020
          </p>
          <p className="text-xl">Dashboard, User Experience Design</p>
        </div>
        <div className="content space-y-4">
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <img className="mx-auto" src="/images/work/img-1.jpg" alt="work 1" />

          <h2 className="font-text-100 text-3xl">Heading 1</h2>
          <h3 className="font-text-100 text-2xl">Heading 2</h3>

          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <img className="mx-auto" src="/images/work/img-2.jpg" alt="work 2" />
          <img className="mx-auto" src="/images/work/img-3.jpg" alt="work 3" />
        </div>
      </div>
    </Container>
  );
};
