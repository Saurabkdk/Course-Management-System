import express from "express";
import { getPersonalTutor, createPersonalTutor, updatePersonalTutor, deletePersonalTutor, searchPersonalTutor, getOnePersonalTutor} from "../controllers/personalTutorController.js";

const router = express.Router();

router.get('/personalTutor', getPersonalTutor);
router.post('/createPersonalTutor', createPersonalTutor);
router.put('/updatePersonalTutor/:id', updatePersonalTutor);
router.delete('/deletePersonalTutor/:id', deletePersonalTutor);
router.get('/personalTutor/:id', getOnePersonalTutor);
router.get('/personalTutor/search/:id', searchPersonalTutor);

export default router;