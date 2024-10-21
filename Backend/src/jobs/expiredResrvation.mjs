import cron from "node-cron";
import prisma from "../db/db.mjs";

cron.schedule("* * * * *", async () => {
  console.log("Running cron job to delete expired reservations...");
  try {
    const now = new Date();

    const expiredReservation = await prisma.Reservation.findMany({
      where: {
        timeOut: {
          lte: now,
        },
      },
    });

    for (const Reservation of expiredReservation) {
      await prisma.Slot.update({
        where: { id: Reservation.slotId },
        data: { isOccupied: false },
      });

      await prisma.Reservation.delete({
        where: { id: Reservation.id },
      });
      console.log(`Slot ${Reservation.slotId} updated to isOccupied: false and reservation ${Reservation.id} deleted.`);
    }
  } catch (error) {
    console.error("Error Updating Expired reservation:", error);
  }
});
