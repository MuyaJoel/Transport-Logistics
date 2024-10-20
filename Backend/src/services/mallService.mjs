import prisma from "../db/db.mjs";

export const getMalls = async () => {
  return await prisma.Mall.findMany();
};

export const getMallSlots = async (mallId) => {
  return await prisma.Slot.findMany({
    where: {
      mallId: Number(mallId),
      isOccupied: false,
    },
  });
};
