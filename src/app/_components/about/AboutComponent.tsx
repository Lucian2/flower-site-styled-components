import { great_vibes } from '@/app/_fonts/fonts';
import { FunctionComponent } from 'react';
import { AboutStyledComponent } from '../styled/About.styled';
import Image from 'next/image';

export const AboutComponent: FunctionComponent = () => {
  return (
    <AboutStyledComponent>
      <h1 className={`fst-italic ${great_vibes.className}`}>About me</h1>
      <div className='d-flex justify-content-between gap-5'>
        <p>
          {`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.`}
        </p>
        <Image
          src={'/assets/images/about.png'}
          width={226}
          height={396}
          alt={'about'}
          className='img-fluid me-5 d-none d-md-block'
        />
      </div>
    </AboutStyledComponent>
  );
};
