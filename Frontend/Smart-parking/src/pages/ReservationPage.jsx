import React from "react";
import Reservation from "../components/Reservation";

const ReservationPage = ({ reservationData }) => {
  return (
    <div className="d-flex justify-content-center">
      <Reservation {...reservationData} />
    </div>
  );
};

export default ReservationPage;
