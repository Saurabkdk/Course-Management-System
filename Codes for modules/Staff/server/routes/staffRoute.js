import express from "express";
import { getStaff, createStaff, updateStaff, deleteStaff, searchStaff, getOneStaff } from "../controllers/staffControllers.js";

const router = express.Router();

router.get('/staff', getStaff);
router.post('/staff', createStaff);
router.put('/staff/:id', updateStaff);
router.delete('/staff/:id', deleteStaff);
router.get('/staff/:id', getOneStaff);
router.get('/staff/search/:id', searchStaff);

export default router;