import React from "react";

const Reservation = ({ numberPlate, timeIn, timeOut, amount }) => {
  return (
    <div>
      <h2>Reservation Confirmed.</h2>
      <p>Number Plate: {numberPlate}</p>
      <p>Time In: {timeIn}</p>
      <p>Time Out: {timeOut}</p>
      <p>Amount to pay: KES {amount}</p>
    </div>
  );
};

export default Reservation;
