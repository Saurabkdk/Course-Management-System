import express from "express";
import {
  getStaff,
  createStaff,
  updateStaff,
  deleteStaff,
  searchStaff,
  getOneStaff,
  getModule,
  createModule,
  updateModule,
  deleteModule,
  getOneModule,
  searchModule,
  getAssignment,
  createAssignment,
  updateAssignment,
  deleteAssignment,
  getOneAssignment,
  getSubmission,
  createSubmission,
  markSubmission,
  deleteSubmission,
  getOneSubmission,
  searchSubmission,
  getAdmin,
  createAdmin,
  getDiary,
  createDiary,
  updateDiary,
  deleteDiary,
  getOneDiary,
  searchDiary,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  getOneStudent,
  searchStudent,
  getAttendance,
  createAttendance,
  updateAttendance,
  deleteAttendance,
  getOneAttendance,
  searchAttendance,
  getAttendanceStudents,
  createAttendanceStudent,
  updateAttendanceStudent,
  deleteAttendanceStudent,
  getOneAttendanceStudent,
  searchAttendanceStudent,
  takeAttendanceStudent,
  countAttendanceStudent,
  checkAttendanceStudent,
  getPersonalTutor,
  createPersonalTutor,
  updatePersonalTutor,
  deletePersonalTutor,
  getOnePersonalTutor,
  searchPersonalTutor,
  getPersonalTutorStudents,
  createPersonalTutorStudent,
  updatePersonalTutorStudent,
  deletePersonalTutorStudent,
  getOnePersonalTutorStudent,
  searchPersonalTutorStudent,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  getOneCourse,
  searchCourse,
  getTimetable,
  createTimetable,
  updateTimetable,
  deleteTimetable,
  getOneTimetable,
} from "../controllers/controllers.js";

const router = express.Router();

router.get("/admin", getAdmin);
router.post("/createadmin", createAdmin);

router.get("/staff", getStaff);
router.post("/staff", createStaff);
router.put("/staff/:id", updateStaff);
router.delete("/staff/:id", deleteStaff);
router.get("/staff/:id", getOneStaff);
router.get("/staff/search/:id", searchStaff);

router.get("/module", getModule);
router.post("/module", createModule);
router.put("/module/:id", updateModule);
router.delete("/module/:id", deleteModule);
router.get("/module/:id", getOneModule);
router.get("/module/search/:id", searchModule);

router.get("/assignment", getAssignment);
router.post("/assignment", createAssignment);
router.put("/assignment/:id", updateAssignment);
router.delete("/assignment/:id", deleteAssignment);
router.get("/assignment/:id", getOneAssignment);

router.get("/submitted", getSubmission);
router.post("/submission", createSubmission);
router.put("/submitted/:id", markSubmission);
router.delete("/submitted/:id", deleteSubmission);
router.get("/submitted/:id", getOneSubmission);
router.get("/submitted/search/:id", searchSubmission);

router.get("/diary", getDiary);
router.post("/diary", createDiary);
router.put("/diary/:id", updateDiary);
router.delete("/diary/:id", deleteDiary);
router.get("/diary/:id", getOneDiary);
router.get("/diary/search/:id", searchDiary);

router.get("/student", getStudent);
router.post("/createStudent", createStudent);
router.put("/updateStudent/:id", updateStudent);
router.delete("/deleteStudent/:id", deleteStudent);
router.get("/student/:id", getOneStudent);
router.get("/student/search/:id", searchStudent);

router.get('/attendance', getAttendance);
router.post('/createAttendance', createAttendance);
router.put('/updateAttendance/:id', updateAttendance);
router.delete('/deleteAttendance/:id', deleteAttendance);
router.get('/attendance/:id', getOneAttendance);
router.get('/attendance/search/:id', searchAttendance);

router.get('/attendanceStudents/:id/:course/:module/:level/:section/:year', getAttendanceStudents);
router.post('/createAttendanceStudent', createAttendanceStudent);
router.put('/updateAttendanceStudent/:id', updateAttendanceStudent);
router.delete('/deleteAttendanceStudent/:id', deleteAttendanceStudent);
router.get('/attendanceStudent/:id', getOneAttendanceStudent);
router.get('/attendanceStudent/search/:id', searchAttendanceStudent);
router.get('/attendanceStudent/takeAttendance/:id', takeAttendanceStudent);
router.get('/attendanceStudent/countAttendance/:id', countAttendanceStudent);
router.get('/attendanceStudent/checkAttendance/:id', checkAttendanceStudent);

router.get('/personalTutor', getPersonalTutor);
router.post('/createPersonalTutor', createPersonalTutor);
router.put('/updatePersonalTutor/:id', updatePersonalTutor);
router.delete('/deletePersonalTutor/:id', deletePersonalTutor);
router.get('/personalTutor/:id', getOnePersonalTutor);
router.get('/personalTutor/search/:id', searchPersonalTutor);

router.get('/personalTutorStudents/:id', getPersonalTutorStudents);
router.post('/createPersonalTutorStudent', createPersonalTutorStudent);
router.put('/updatePersonalTutorStudent/:id', updatePersonalTutorStudent);
router.delete('/deletePersonalTutorStudent/:id', deletePersonalTutorStudent);
router.get('/personalTutorStudent/:id', getOnePersonalTutorStudent);
router.get('/personalTutorStudent/search/:id', searchPersonalTutorStudent);

router.get("/course", getCourse);
router.post("/course", createCourse);
router.put("/course/:id", updateCourse);
router.delete("/course/:id", deleteCourse);
router.get("/course/:id", getOneCourse);
router.get("/course/search/:id", searchCourse);

router.get("/timetable", getTimetable);
router.post("/timetable", createTimetable);
router.put("/timetable/:id", updateTimetable);
router.delete("/timetable/:id", deleteTimetable);
router.get("/timetable/:id", getOneTimetable);

export default router;
