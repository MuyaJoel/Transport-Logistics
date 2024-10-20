import prisma from "../db/db.mjs";

export const createReservation = async ({
  numberPlate,
  timeIn,
  timeOut,
  slotId,
}) => {
  await prisma.slot.update({
    where: { id: slotId },
    data: { isOccupied: true },
  });

  return await prisma.Reservation.create({
    data: {
      numberPlate,
      timeIn: new Date(timeIn),
      timeOut: new Date(timeOut),
      slot: { connect: { id: slotId } },
    },
  });
};
