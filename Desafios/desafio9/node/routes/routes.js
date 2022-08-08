import express from 'express'
import { getAllMsj, getMsj, createMsj } from '../controllers/MsjController.js'
const router = express.Router()

router.get('/', getAllMsj)
router.get('/:id', getMsj)
router.post('/', createMsj)

export default router