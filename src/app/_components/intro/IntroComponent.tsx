import { FunctionComponent } from 'react';
import { IntroStyledCtn } from '../styled/Intro.styled';
import Image from 'next/image';
import { DecorativeText } from '../common/DecorativeText';

export const IntroComponent: FunctionComponent = () => {
  return (
    <IntroStyledCtn className='ctn-fluid d-flex position-relative'>
      <div className='introImg position-relative w-50'>
        <Image
          src={'/assets/images/introimg.png'}
          alt={'introImg'}
          fill
          className='object-fit-cover'
          priority
        />
      </div>
      <div className='introDescription w-50 align-self-end pb-5 mb-0 mb-md-5 px-3'>
        <DecorativeText
          text={'Flora \n flowers'}
          ctnClasses='ms-0 ms-lg-5 mb-5 mb-md-0'
        />
        <p>{`“Love is the flower you've got to let grow“
         John Lennon`}</p>
      </div>
      <div className='borderCtn d-none d-lg-block' />
    </IntroStyledCtn>
  );
};
