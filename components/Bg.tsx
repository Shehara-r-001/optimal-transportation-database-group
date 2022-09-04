import Image from 'next/image';
import React from 'react';
import BG01 from '../assets/images/bg01.png';

const Bg = () => {
  return (
    <div className='h-[100vh] w-[100vw] relative -z-10'>
      <Image src={BG01} alt='bg01' layout='fill' />
    </div>
  );
};

export default Bg;
