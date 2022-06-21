import express from "express";
import { Admin } from "../model/model.js";
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
  LoginCheck,
} from "../controllers/staffControllers.js";

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

export default router;
