import Image from 'next/image';
import React from 'react';
import BG01 from '../assets/images/bg01.png';

const Landing = () => {
  return (
    <div>
      <div className='h-[100vh] w-[100vw] relative'>
        <Image src={BG01} alt='bg01' layout='fill' />
      </div>
      <div className='fixed top-[30vh] backdrop-blur-sm text-sm'>
        <p className='h-[40vh] w-[50vw] px-10 flex items-center text-center'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          magni, iusto reprehenderit assumenda nesciunt voluptas quidem error
          aliquam voluptatibus deleniti, similique aut impedit quo minima!
          Itaque iusto quisquam eius cum sed nam voluptas repudiandae ullam
          explicabo, tempore minus deserunt esse rerum totam, labore repellendus
          eum libero earum? Sequi, nam soluta, neque quo incidunt reprehenderit
          beatae ullam cum aperiam veritatis dolore atque vel nulla reiciendis,
          ipsa ut nisi laboriosam voluptates corporis excepturi dicta iusto.
          Blanditiis illum maiores temporibus, eveniet fugit voluptas voluptates
          quo modi minus consequatur doloremque at aliquam cumque sed error, vel
          ratione amet dolor? Deserunt atque iusto sed iste.
        </p>
      </div>
    </div>
  );
};

export default Landing;
