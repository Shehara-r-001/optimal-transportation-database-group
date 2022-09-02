import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { PrismaClient } from '@prisma/client';

type Props = {
  vehicles: IVehicle[];
};

const vpage = ({ vehicles }: Props) => {
  return (
    <div>
      {vehicles.map((vehicle) => (
        <div key={vehicle.id}>
          <p>{vehicle.name}</p>
          <p>{vehicle.passengers}</p>
          <p>{vehicle.fuel_type}</p>
          <p>{vehicle.avg_consumption}</p>
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps(_context: GetServerSidePropsContext) {
  const prisma = new PrismaClient();
  const vehicles = await prisma.vehicle.findMany();

  return {
    props: {
      vehicles,
    },
  };
}

export default vpage;
