import express from "express";
import { getStudent, createStudent, updateStudent, deleteStudent, searchStudent, getOneStudent} from "../controllers/studentControllers.js";

const router = express.Router();

router.get('/student', getStudent);
router.post('/createStudent', createStudent);
router.put('/updateStudent/:id', updateStudent);
router.delete('/deleteStudent/:id', deleteStudent);
router.get('/student/:id', getOneStudent);
router.get('/student/search/:id', searchStudent);

export default router;