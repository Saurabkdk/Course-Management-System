import express from "express";
import { getAttendance, createAttendance, updateAttendance, deleteAttendance, searchAttendance, getOneAttendance} from "../controllers/attendanceController.js";

const router = express.Router();

router.get('/attendance', getAttendance);
router.post('/createAttendance', createAttendance);
router.put('/updateAttendance/:id', updateAttendance);
router.delete('/deleteAttendance/:id', deleteAttendance);
router.get('/attendance/:id', getOneAttendance);
router.get('/attendance/search/:id', searchAttendance);

export default router;