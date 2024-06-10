import { FunctionComponent } from 'react';
import Image from 'next/image';

export const AlbumComponent: FunctionComponent = () => {
  return (
    <div className='albumCtn d-flex justify-content-center gap-4 my-5 mx-0 flex-wrap'>
      {new Array(3).fill(0).map((el, idx) => (
        <Image
          key={idx}
          src={`/assets/images/album${idx + 1}.png`}
          width={360}
          height={303}
          alt={'album-img'}
          className='img-fluid'
        />
      ))}
    </div>
  );
};
