import express from "express";
import { getStaff, createStaff, updateStaff, deleteStaff, searchStaff, getOneStaff, getModule, createModule, updateModule, deleteModule, getOneModule, searchModule } from "../controllers/staffControllers.js";

const router = express.Router();

router.get('/staff', getStaff);
router.post('/staff', createStaff);
router.put('/staff/:id', updateStaff);
router.delete('/staff/:id', deleteStaff);
router.get('/staff/:id', getOneStaff);
router.get('/staff/search/:id', searchStaff);

router.get('/module', getModule);
router.post('/module', createModule);
router.put('/module/:id', updateModule);
router.delete('/module/:id', deleteModule);
router.get('/module/:id', getOneModule);
router.get('/module/search/:id', searchModule);

export default router;