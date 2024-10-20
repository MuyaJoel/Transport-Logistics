import express from 'express'
import { fetchMalls, fetchMallSlots } from '../controllers/mallController.mjs'

const router = express.Router()

router.get('/malls',fetchMalls)
router.get('/malls/:mallId/slots', fetchMallSlots)

export default router