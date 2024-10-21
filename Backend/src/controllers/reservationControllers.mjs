import prisma from "../db/db.mjs";

export const createRes = async (req, res) => {
  try {
    const { numberPlate, timeIn, timeOut, amount } = req.body;
    const { mallId, slotId } = req.params;
    console.log(req.params);

    // const data = matchedData(req);
    if (!numberPlate || !timeIn || !timeOut || !amount) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const existingReservation = await prisma.Reservation.findFirst({
      where: {
        slotId: Number(slotId),
        timeOut: {
          equals: null,
        },
      },
    });

    if (existingReservation) {
      return res.status(400).json({ message: "Slot is already reserved." });
    }

    const reservation = await prisma.Reservation.create({
      data: {
        numberPlate,
        timeIn: new Date(timeIn),
        timeOut: new Date(timeOut),
        amount: Number(amount),
        slotId: Number(slotId),
      },
    });

    await prisma.Slot.update({
      where: { id: Number(slotId) },
      data: { isOccupied: true },
    });

    console.log(reservation);
    res.status(200).json(reservation);
  } catch (error) {
    console.error("Error creating reservation:", error);
    res
      .status(500)
      .json({ message: "Error creating reservation", error: error.message });
  }
};
