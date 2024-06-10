import { FunctionComponent } from 'react';
import Image from 'next/image';
import { StyledWelcome } from '../styled/Welcome.styled';
import { DecorativeText } from '../common/DecorativeText';
import { great_vibes } from '@/app/_fonts/fonts';

export const WelcomeComponent: FunctionComponent = () => {
  return (
    <StyledWelcome className='d-flex flex-column flex-lg-row flex-wrap'>
      <div className='imagesSection position-relative  d-none d-lg-block w-50'>
        <div className='imagesCtn position-relative'>
          <Image
            src={'/assets/images/welcome1.png'}
            width={356}
            height={534}
            alt={'welcome1'}
            className='img-fluid'
          />
          <Image
            src={'/assets/images/welcome2.png'}
            width={247}
            height={375}
            alt={'welcome2'}
            className='position-absolute img-fluid top-50 d-none d-xl-block'
          />
        </div>
        <hr className='vertical-line position-absolute d-none d-lg-block' />
      </div>
      <div className='textSection d-flex flex-column'>
        <h1 className={`fst-italic text-center mb-0 ${great_vibes.className}`}>
          Welcome
        </h1>
        <DecorativeText
          text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
          textFontSize='0.8rem'
          firstLetterColor='#c5c8c4'
          firstLetterFontSize='14rem'
        />
        <Image
          src={'/assets/images/welcome3.png'}
          width={245}
          height={329}
          alt={'welcome3'}
          className='img-fluid me-0 me-md-5 align-self-center align-self-lg-end'
        />
      </div>
      <hr className='horizontal-line mt-5' />
    </StyledWelcome>
  );
};
