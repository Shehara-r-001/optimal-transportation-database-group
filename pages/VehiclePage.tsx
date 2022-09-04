import { Prisma } from '@prisma/client';
import { GetServerSidePropsContext } from 'next';
import React from 'react';
import prisma from '../lib/prisma';

type Props = {
  vehicles: IVehicle[];
};

const vpage = () => {
  return (
    <div className='fixed top-0 left-0'>
      {/* {vehicles?.map((vehicle) => (
        <div key={vehicle.id}>
          <p>{vehicle.name}</p>
          <p>{vehicle.passengers}</p>
          <p>{vehicle.fuel_type}</p>
          <p>{vehicle.avg_consumption}</p>
          <p>{vehicle.fuel.fuel_type}</p>
        </div>
      ))} */}
    </div>
  );
};

export async function getServerSideProps(_context: GetServerSidePropsContext) {
  // const vehicles = await prisma.vehicle.findMany({
  //   include: {
  //     fuel: true,
  //   },
  // });

  const vehicles = await prisma.personal.findMany({
    include: {
      fuel: true,
    },
  });
  console.log(vehicles);

  return {
    props: {
      vehicles,
    },
  };
}

export default vpage;
