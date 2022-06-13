import express from "express";
import { getPersonalTutorStudents, createPersonalTutorStudent, updatePersonalTutorStudent, deletePersonalTutorStudent, searchPersonalTutorStudent, getOnePersonalTutorStudent} from "../controllers/personalTutorStudentController.js";

const router = express.Router();

router.get('/personalTutorStudents/:id', getPersonalTutorStudents);
router.post('/createPersonalTutorStudent', createPersonalTutorStudent);
router.put('/updatePersonalTutorStudent/:id', updatePersonalTutorStudent);
router.delete('/deletePersonalTutorStudent/:id', deletePersonalTutorStudent);
router.get('/personalTutorStudent/:id', getOnePersonalTutorStudent);
router.get('/personalTutorStudent/search/:id', searchPersonalTutorStudent);

export default router;