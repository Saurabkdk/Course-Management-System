import express from "express";
import { getAttendanceStudents,checkAttendanceStudent, countAttendanceStudent ,createAttendanceStudent, updateAttendanceStudent, deleteAttendanceStudent, searchAttendanceStudent,  getOneAttendanceStudent, takeAttendanceStudent} from "../controllers/attendanceStudentController.js";

const router = express.Router();

router.get('/attendanceStudents/:id/:course/:module/:level/:section/:year', getAttendanceStudents);
router.post('/createAttendanceStudent', createAttendanceStudent);
router.put('/updateAttendanceStudent/:id', updateAttendanceStudent);
router.delete('/deleteAttendanceStudent/:id', deleteAttendanceStudent);
router.get('/attendanceStudent/:id', getOneAttendanceStudent);
router.get('/attendanceStudent/search/:id', searchAttendanceStudent);
router.get('/attendanceStudent/takeAttendance/:id', takeAttendanceStudent);
router.get('/attendanceStudent/countAttendance/:id', countAttendanceStudent);
router.get('/attendanceStudent/checkAttendance/:id', checkAttendanceStudent);

export default router;