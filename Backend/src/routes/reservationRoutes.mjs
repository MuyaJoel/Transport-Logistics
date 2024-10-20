import express from "express";
import { createRes } from "../controllers/reservationControllers.mjs";


const router = express.Router();

router.post("/malls/:mallId/slots/:slotId/reserve", createRes);

export default router;
