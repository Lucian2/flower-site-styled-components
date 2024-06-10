import { navbarList } from '@/app/_constants/constants';
import Link from 'next/link';
import { FunctionComponent, useState } from 'react';
import { SocialMediaIcons } from '../common/SocialMediaIcons';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

export const Navbar: FunctionComponent = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const getMenuElements = () => {
    return navbarList.map((el) => (
      <Link href={'#'} className='text-capitalize' key={el}>
        {el}
      </Link>
    ));
  };

  return (
    <div className='navBarCtn w-75 d-flex justify-content-start justify-content-sm-center justify-content-lg-between flex-wrap'>
      <ul className='internalList p-0 m-0 flex-wrap justify-content-center d-none d-sm-flex'>
        {getMenuElements()}
      </ul>
      {!isHamburgerMenuOpen ? (
        <button
          onClick={() => setIsHamburgerMenuOpen(true)}
          className='bg-transparent border-0 d-block d-sm-none'
        >
          <GiHamburgerMenu fontSize={'1.7rem'} />
        </button>
      ) : (
        <div
          className={`mobileMenuList position-fixed top-0 start-0 bg-light w-100 h-100 z-index-100 d-flex align-items-start ${
            isHamburgerMenuOpen ? 'slide-in' : ''
          }`}
        >
          <button
            onClick={() => setIsHamburgerMenuOpen(false)}
            className='bg-transparent border-0'
          >
            <MdClose fontSize={'1.7rem'} />
          </button>
          <ul className='d-flex flex-column gap-4'>{getMenuElements()}</ul>
        </div>
      )}
      <div className='socialMediaCtn d-none d-lg-block'>
        <SocialMediaIcons />
      </div>
    </div>
  );
};
