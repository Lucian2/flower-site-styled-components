'use client';

import { FunctionComponent } from 'react';
import { StyledHeader } from '../styled/Header.styled';
import { Navbar } from '../navbar/Navbar';
import { roboto } from '@/app/_fonts/fonts';

export const Header: FunctionComponent = () => {
  return (
    <StyledHeader
      className={`d-flex justify-content-center align-items-center ${roboto.className}`}
    >
      <Navbar />
    </StyledHeader>
  );
};
