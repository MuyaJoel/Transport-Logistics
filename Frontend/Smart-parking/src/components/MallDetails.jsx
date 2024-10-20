import React, { useState, useEffect } from "react";
import axios from "axios";
import SlotForm from "./SlotForm";

const MallDetails = ({ mallId }) => {
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    fetchSlots(mallId);
  }, [mallId]);

  const fetchSlots = async (mallId) => {
    const response = await axios.get(
      `http://127.0.0.1:5000/api/malls/${mallId}/slots`
    );
    const data = response.data.slots;
    // console.log(response);
    setSlots(data);
  };

  const handleSlotsOnClick = (slot) => {
    if (!slot.isOccupied) {
      setSelectedSlot(slot);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <h2>Available Parking Slots</h2>
      </div>
      <div className="d-flex justify-content-center">
        {slots.length > 0 ? (
          <ul>
            {slots.map((slot) => (
              <li
                key={slot.id}
                onClick={() => handleSlotsOnClick(slot)}
                style={{
                  cursor: slot.isOccupied ? "default" : "pointer",
                  color: slot.isOccupied ? "gray" : "blue",
                }}
              >
                slot {slot.number}: {slot.isOccupied ? "Occupied" : "Available"} 
              </li>
            ))}
          </ul>
        ) : (
          <p>No available slots.</p>
        )}
      </div>
      <div className="d-flex justify-content-center">
        {selectedSlot && (
          <div>
            <h3>Reserving Slot {selectedSlot.number}</h3>
            <SlotForm mallId={mallId} slotId={selectedSlot.id} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MallDetails;
