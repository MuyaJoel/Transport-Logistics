import React, { useState } from "react";
import axios from "axios";
import {
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

const SlotForm = ({ mallId, slotId }) => {
  const [numberPlate, setNumberPlate] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [timeOut, setTimeOut] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (new Date(timeOut) <= new Date(timeIn)) {
      setError("Time Out must be Greater than Time In");
      return;
    }

    const hours = calculateHours(timeIn, timeOut);
    const totalAmount = calculateAmount(hours);
    setAmount(totalAmount);
    setError(" ");

    try {
      const response = await axios.post(
        `http://127.0.0.1:5000/api/malls/${mallId}/slots/${slotId}/reserve`,
        {
          numberPlate,
          timeIn,
          timeOut,
          amount: totalAmount,
        }
      );

      if (response.status === 200) {
        setSuccess("Slot reserved successfully!");

        setNumberPlate("");
        setTimeIn("");
        setTimeOut("");
        setAmount(0);
      }
    } catch (error) {
      setError("Error reserving the slot. Please try again.");
      console.log(error);
    }
  };

  const calculateHours = (inTime, outTime) => {
    const inDate = new Date(inTime);
    const outDate = new Date(outTime);

    return (outDate - inDate) / (1000 * 60 * 60);
  };

  const calculateAmount = (hours) => {
    const ratePerHour = 50;
    return (hours * ratePerHour).toFixed(2);
  };
  return (
    <Stack>
      <form onSubmit={handleSubmit}>
        <FormControl id="numberPlate" marginBottom="10px">
          <FormLabel>Number Plate:</FormLabel>
          <Input
            type="text"
            value={numberPlate}
            onChange={(e) => setNumberPlate(e.target.value)}
            required
          />
        </FormControl>
        <FormControl id="timeIn" marginBottom="10px">
          <FormLabel>Time In:</FormLabel>
          <Input
            type="datetime-local"
            value={timeIn}
            onChange={(e) => setTimeIn(e.target.value)}
            required
          />
        </FormControl>
        <FormControl id="timeOut" marginBottom="10px">
          <FormLabel>Time Out:</FormLabel>
          <Input
            type="datetime-local"
            value={timeOut}
            onChange={(e) => setTimeOut(e.target.value)}
            required
          />
        </FormControl>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}

        <Button type="submit">Reserve Slot</Button>

        {amount > 0 && <p>Total Amount to Pay: KES {amount}</p>}
      </form>
    </Stack>
  );
};

export default SlotForm;
