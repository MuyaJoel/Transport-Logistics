import { Router } from "express";
import mallRoutes from "./mallRoutes.mjs";
import reservationRoutes from "./reservationRoutes.mjs";

const router = Router();

router.use(mallRoutes);
router.use(reservationRoutes);

export default router;
