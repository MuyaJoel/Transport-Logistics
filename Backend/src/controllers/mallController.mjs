import { getMalls, getMallSlots } from "../services/mallService.mjs";

import prisma from "../db/db.mjs";

export const fetchMalls = async (req, res) => {
  try {
    const malls = await prisma.mall.findMany();
    res.status(200).json({ malls });
  } catch (error) {
    res.status(500).json({ message: "Error fetching malls" });
  }
};

export const fetchMallSlots = async (req, res) => {
  try {
    const { mallId } = req.params;
    const slots = await  prisma.Slot.findMany({
      where: {
        mallId: Number(mallId),
        isOccupied: false,
      },
    });
    res.status(200).json({ slots });
  } catch (error) {
    res.status(500).json({ message: "Error fetching slots" });
  }
};
