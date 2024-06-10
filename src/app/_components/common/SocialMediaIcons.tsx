import { FunctionComponent } from 'react';
import { FiTwitter } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';
import { SlSocialFacebook } from 'react-icons/sl';

export const SocialMediaIcons: FunctionComponent = () => {
  const iconsList = [
    { name: <SlSocialFacebook /> },
    { name: <FiTwitter /> },
    { name: <SiInstagram /> },
  ];

  return (
    <ul className='externalList p-0 m-0'>
      {iconsList.map((icon, idx) => (
        <li
          key={idx}
          className='text-capitalize border border-dark border-2 rounded-circle socialMediaEl d-flex align-items-center justify-content-center'
        >
          <a href='#'>{icon.name}</a>
        </li>
      ))}
    </ul>
  );
};
