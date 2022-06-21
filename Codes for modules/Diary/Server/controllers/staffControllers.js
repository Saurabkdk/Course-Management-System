import {
  StaffRecord,
  ModuleRecord,
  AssignmentRecord,
  SubmissionRecord,
  Admin,
  DiaryRecord,
} from "../model/model.js";
import jwt from "jsonwebtoken";

export const getAdmin = async (req, res) => {
  try {
    const adminRecord = await Admin.find();

    res.status(200).json({adminRecord});
  } catch (error) {
    res.status(404).json({
      message: "Admin not found",
    });
  }
};

export const LoginCheck = async (req, res) => {
    const credentials = req.body;
    console.log(credentials.admin_id);
    Admin.findOne({ admin_id: credentials.admin_id }, (err, user) => {
      if (user) {
        if (credentials.password === user.password) {

          // const token = jwt.sign({
          //   userId : user.admin_id,
          //   password : user.password,
          // }, 'loginOfAdmin', {expiresIn : 300});

          // const userVer = jwt.verify(token, "loginOfAdmin");

          res.json({ message: "Logged In", user: token, auth : true });
          console.log(userVer);
          console.log("log");
        } else {
          res.send({ message: "Password doesn't match" });
          console.log("No match");
        }
      } else {
        res.send({ message: "Admin doesn't exist" });
        console.log("No exist");
      }
    });
}

export const createAdmin = async (req, res) => {
  const admin = req.body;

  const adminRec = new Admin(admin);

  try {
    await adminRec.save();

    res.status(201).json({ adminRec });
  } catch (error) {
    res.status(409).json({
      message: "Could not create an admin",
    });
  }
};

export const getStaff = async (req, res) => {
  try {
    const staffRecord = await StaffRecord.find();

    res.status(200).json({ staffRecord });
  } catch (error) {
    res.status(404).json({
      message: "Data not found",
    });
  }
};

export const createStaff = async (req, res) => {
  // const {id, status, dormant, firstname, middlename, surname, address, telephone, email, role, subject} = req.body;
  const records = req.body;
  // let newRecord = new StaffRecord({
  //     id,
  //     status,
  //     dormant,
  //     firstname,
  //     middlename,
  //     surname,
  //     address,
  //     telephone,
  //     email,
  //     role,
  //     subject
  // });
  const newRecord = new StaffRecord(records);
  try {
    await newRecord.save();

    res.status(201).json({ newRecord });
  } catch (error) {
    res.status(409).json({
      message: "Data not saved",
    });
  }
};

export const updateStaff = async (req, res) => {
  const records = req.body;

  try {
    let updateRecord = await StaffRecord.findByIdAndUpdate(
      req.params.id,
      records
    );

    updateRecord = await updateRecord.save();

    res.status(200).json({ updateRecord });
  } catch (error) {
    res.status(404).json({
      message: "Cannot update record of id" + req.params.id,
    });
  }
};

export const deleteStaff = async (req, res) => {
  try {
    await StaffRecord.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Record deleted",
    });
  } catch (error) {
    res.status(404).json({
      message: "Could not delete the record of id" + req.params.id,
    });
  }
};

export const searchStaff = async (req, res) => {
  try {
    const searchRecord = await StaffRecord.findOne({ id: req.params.id });

    res.status(200).json({ searchRecord });
  } catch (error) {
    res.status(404).json({
      message: "The requested data not found",
    });
  }
};

export const getOneStaff = async (req, res) => {
  try {
    const viewRecord = await StaffRecord.findById(req.params.id);

    res.status(200).json({ viewRecord });
  } catch (error) {
    res.status(404).json({
      message: "The requested data not found",
    });
  }
};

export const getModule = async (req, res) => {
  try {
    const moduleRecord = await ModuleRecord.find();

    res.status(200).json({ moduleRecord });
  } catch (error) {
    res.status(400).json({
      message: "Module not found",
    });
  }
};

export const createModule = async (req, res) => {
  const records = req.body;

  const newRecord = new ModuleRecord(records);
  try {
    await newRecord.save();

    res.status(201).json({ newRecord });
  } catch (error) {
    res.status(409).json({
      message: "Module not saved",
    });
  }
};

export const updateModule = async (req, res) => {
  const records = req.body;

  try {
    let updateModule = await ModuleRecord.findByIdAndUpdate(
      req.params.id,
      records
    );

    updateModule = await updateModule.save();

    res.status(200).json({ updateModule });
  } catch (error) {
    res.status(404).json({
      message: "Could not update the record with id " + req.params.id,
    });
  }
};

export const deleteModule = async (req, res) => {
  try {
    await ModuleRecord.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Module deleted",
    });
  } catch (error) {
    res.status(404).json({
      message: "Could not delete the module of id " + req.params.id,
    });
  }
};

export const searchModule = async (req, res) => {
  try {
    const searchModule = await ModuleRecord.findOne({ id: req.params.id });

    res.status(200).json({ searchModule });
  } catch (error) {
    res.status(404).json({
      message: "The requested data not found",
    });
  }
};

export const getOneModule = async (req, res) => {
  try {
    const viewRecord = await ModuleRecord.findById(req.params.id);
    // .populate({path: 'staff', select : ['firstname']});
    // .populate('staff')

    res.status(200).json({ viewRecord });
  } catch (error) {
    res.status(404).json({
      message: "The requested data not found",
    });
  }
};

export const getAssignment = async (req, res) => {
  try {
    const assignmentRecord = await AssignmentRecord.find();

    res.status(200).json({ assignmentRecord });
  } catch (error) {
    res.status(400).json({
      message: "Assignment not found",
    });
  }
};

export const createAssignment = async (req, res) => {
  const records = req.body;

  const newRecord = new AssignmentRecord(records);
  try {
    await newRecord.save();

    res.status(201).json({ newRecord });
  } catch (error) {
    res.status(409).json({
      message: "Assignment not saved",
    });
  }
};

export const updateAssignment = async (req, res) => {
  const records = req.body;

  try {
    let updateAssignment = await AssignmentRecord.findByIdAndUpdate(
      req.params.id,
      records
    );

    updateAssignment = await updateAssignment.save();

    res.status(200).json({ updateAssignment });
  } catch (error) {
    res.status(404).json({
      message: "Could not update the record with id " + req.params.id,
    });
  }
};

export const deleteAssignment = async (req, res) => {
  try {
    await AssignmentRecord.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Assignment deleted",
    });
  } catch (error) {
    res.status(404).json({
      message: "Could not delete the assignment of id " + req.params.id,
    });
  }
};

// export const searchAssignment = async (req, res) => {
//     try {
//          const searchAssignment = await AssignmentRecord.findOne({id : req.params.id});

//          res.status(200).json({searchAssignment});
//     } catch (error) {
//         res.status(404).json({
//             message : "The requested data not found"
//         })
//     }
// }

export const getOneAssignment = async (req, res) => {
  try {
    const viewRecord = await AssignmentRecord.findById(req.params.id);
    // .populate({path: 'module', select : ['module_name']});
    // .populate('module')

    res.status(200).json({ viewRecord });
  } catch (error) {
    res.status(404).json({
      message: "The requested data not found",
    });
  }
};

export const getSubmission = async (req, res) => {
  try {
    const submissionRecord = await SubmissionRecord.find();

    res.status(200).json({ submissionRecord });
  } catch (error) {
    res.status(400).json({
      message: "No submissions",
    });
  }
};

export const createSubmission = async (req, res) => {
  const records = req.body;

  const newRecord = new SubmissionRecord(records);
  try {
    await newRecord.save();

    res.status(201).json({ newRecord });
  } catch (error) {
    res.status(409).json({
      message: "Submission done",
    });
  }
};

export const markSubmission = async (req, res) => {
  const records = req.body;

  try {
    let markSubmission = await SubmissionRecord.findByIdAndUpdate(
      req.params.id,
      records
    );

    markSubmission = await markSubmission.save();

    res.status(200).json({ markSubmission });
  } catch (error) {
    res.status(404).json({
      message: "Could not mark the submission",
    });
  }
};

export const deleteSubmission = async (req, res) => {
  try {
    await SubmissionRecord.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Submission deleted",
    });
  } catch (error) {
    res.status(404).json({
      message: "Could not delete the submission",
    });
  }
};

export const searchSubmission = async (req, res) => {
  try {
    const searchSubmission = await SubmissionRecord.findOne({
      student_id: req.params.id,
    });

    res.status(200).json({ searchSubmission });
  } catch (error) {
    res.status(404).json({
      message: "The requested data not found",
    });
  }
};

export const getOneSubmission = async (req, res) => {
  try {
    const viewRecord = await SubmissionRecord.findById(req.params.id);
    // .populate({path: 'module', select : ['module_name']});
    // .populate('module')

    res.status(200).json({ viewRecord });
  } catch (error) {
    res.status(404).json({
      message: "The requested data not found",
    });
  }
};

export const getDiary = async (req, res) => {
  try {
    const diaryRecord = await DiaryRecord.find();

    res.status(200).json({ diaryRecord });
  } catch (error) {
    res.status(400).json({
      message: "Diary not found",
    });
  }
};

export const createDiary = async (req, res) => {
  const records = req.body;

  const newRecord = new DiaryRecord(records);
  try {
    await newRecord.save();

    res.status(201).json({ newRecord });
  } catch (error) {
    res.status(409).json({
      message: "Diary not saved",
    });
  }
};

export const updateDiary = async (req, res) => {
  const records = req.body;

  try {
    let updateDiary = await DiaryRecord.findByIdAndUpdate(
      req.params.id,
      records
    );

    updateDiary = await updateDiary.save();

    res.status(200).json({ updateDiary });
  } catch (error) {
    res.status(404).json({
      message: "Could not update the diary with id " + req.params.id,
    });
  }
};

export const deleteDiary = async (req, res) => {
  try {
    await DiaryRecord.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Diary deleted",
    });
  } catch (error) {
    res.status(404).json({
      message: "Could not delete the diary of id " + req.params.id,
    });
  }
};

export const searchDiary = async (req, res) => {
  try {
    const searchDiary = await DiaryRecord.findOne({ id: req.params.id });

    res.status(200).json({ searchDiary });
  } catch (error) {
    res.status(404).json({
      message: "The requested data not found",
    });
  }
};

export const getOneDiary = async (req, res) => {
  try {
    const viewRecord = await DiaryRecord.findById(req.params.id);
    // .populate({path: 'staff', select : ['firstname']});
    // .populate('staff')

    res.status(200).json({ viewRecord });
  } catch (error) {
    res.status(404).json({
      message: "The requested data not found",
    });
  }
};

