'use client';

import { FunctionComponent } from 'react';
import { StyledFooter } from '../styled/Footer.styled';
import { footerOpeningList } from '@/app/_constants/constants';
import { SocialMediaIcons } from '../common/SocialMediaIcons';

export const Footer: FunctionComponent = () => {
  return (
    <StyledFooter
      className={`d-flex justify-content-between flex-column flex-lg-row`}
    >
      <div className='d-flex flex-column align-items-center'>
        {footerOpeningList.map((el) => (
          <p key={el} className='mb-1 text-center'>
            {el}
          </p>
        ))}
      </div>
      <p className='align-self-center text-center'>
        Flora Flowers © Copyright 2023
      </p>
      <div className='d-flex flex-column align-items-center align-items-lg-end me-0 me-lg-5'>
        <p className='text-center text-lg-end'>{`floramiller@gmail.com \n 0142 / 1576621`}</p>
        <SocialMediaIcons />
      </div>
    </StyledFooter>
  );
};
