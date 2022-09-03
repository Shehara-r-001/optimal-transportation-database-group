import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { PrismaClient } from '@prisma/client';
import prisma from '../lib/prisma';

type Props = {
  vehicles: IVehicle[];
};

const vpage = ({ vehicles }: Props) => {
  return (
    <div>
      {vehicles?.map((vehicle) => (
        <div key={vehicle.id}>
          <p>{vehicle.name}</p>
          <p>{vehicle.passengers}</p>
          <p>{vehicle.fuel_type}</p>
          <p>{vehicle.avg_consumption}</p>
          <p>{vehicle.fuel.fuel_type}</p>
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps(_context: GetServerSidePropsContext) {
  const vehicles = await prisma.vehicle.findMany({
    include: {
      fuel: true,
    },
  });

  const fuel = await prisma.fuel.findMany();

  return {
    props: {
      vehicles,
      fuel,
    },
  };
}

export default vpage;
