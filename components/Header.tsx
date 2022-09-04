import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className='flex items-center fixed top-0 left-0 right-0 justify-between p-3 px-5 border-b border-[#333] z-50 backdrop-blur-sm'>
      <div className='flex items-center space-x-2'>
        <Image
          src='https://www.countryflags.com/wp-content/uploads/sri-lanka-flag-png-xl.png'
          alt='slflag'
          width={50}
          height={25}
        />
        <h1 className='font-semibold'>DDCS</h1>
      </div>
      <div className='flex items-center space-x-2 lg:space-x-5 text-sm'>
        <Link href='/VehiclePage'>
          <h1 className='hLink'>Vehicles</h1>
        </Link>
        <h1 className='hLink'>Vehicles</h1>
        <h1 className='hLink'>Vehicles</h1>
        <h1 className='hLink'>Vehicles</h1>
      </div>
    </div>
  );
};

export default Header;
