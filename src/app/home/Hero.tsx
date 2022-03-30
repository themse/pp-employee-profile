import { FC } from 'react';

import { Bio } from 'app/components/Bio';

export const Hero: FC = () => {
  return (
    <section className="hero">
      <Bio />
    </section>
  );
};
