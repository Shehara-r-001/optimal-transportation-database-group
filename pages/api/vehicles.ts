import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const prisma = new PrismaClient();
  // if (req.method === 'GET') {
  //   const vehicles = await prisma.
  //   return res.status(200).send(vehicles);
  // }
  //  else if (req.method === 'POST') {
  //   const { body: data } = req;
  //   const newVehicle = await prisma.vehicle.create({ data });
  //   return res.status(201).send(newVehicle);
  // }
}
