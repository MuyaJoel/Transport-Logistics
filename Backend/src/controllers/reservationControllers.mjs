import matchedData from 'express-validator'
import { createReservation } from "../services/reservationServices.mjs";

export const createRes = async (req, res) => {
  try {
    const { numberPlate, timeIn, timeOut, amount } = req.body;
    const { mallId, slotId } = req.params;

    // const data = matchedData(req);

    const reservation = await prisma.Reservation.create({
      data: {
        numberPlate,
        timeIn: new Date(timeIn),
        timeOut: new Date(timeOut),
        slotId,
      },
    });
 

    console.log(reservation)
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ message: "Error creating reservation" });
  }
};
