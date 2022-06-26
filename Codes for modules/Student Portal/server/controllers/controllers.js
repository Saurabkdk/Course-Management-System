import {
  StaffRecord,
  ModuleRecord,
  AssignmentRecord,
  SubmissionRecord,
  Admin,
  DiaryRecord,
  StudentRecord,
  PersonalTutorRecord,
  AttendanceStudentRecord,
  PersonalTutorStudentRecord,
  AttendanceRecord,
  TimetableRecord,
  CourseRecord,
} from "../model/model.js";

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

export const getStudent = async (req, res) => {
  try {
      const studentRecord = await StudentRecord.find();
      
      res.status(200).json({studentRecord});
      
  } catch (error) {
      res.status(404).json({
          message : "Data not found"
      })
  }

}

export const createStudent = async (req, res) => {
  const records = req.body
  const newRecord = new StudentRecord(records);
  try {
      await newRecord.save();

      res.status(201).json({newRecord});
  } catch (error) {
      res.status(409).json({
          message : "Data not saved"
      })
  }
}

export const updateStudent = async (req, res) => {
  const records = req.body;

  try {
      let updateRecord = await StudentRecord.findByIdAndUpdate(req.params.id, records);

      updateRecord = await updateRecord.save();

      res.status(200).json({updateRecord});
  } catch (error) {
      res.status(404).json({
          message : "Cannot update record of id" + req.params.id
      });
  }
}

export const deleteStudent = async (req, res) => {
  try {
      await StudentRecord.findByIdAndRemove(req.params.id);

      res.status(200).json({
          message : "Record deleted"
      })
  } catch (error) {
      res.status(404).json({
          message : "Could not delete the record of id" + req.params.id
      })
  }
}

export const searchStudent = async (req, res) => {
  try {
      const searchRecord = await StudentRecord.findOne({id : req.params.id});

      res.status(200).json({searchRecord});
  } catch (error) {
      res.status(404).json({
          message : "The requested data not found"
      })
  }
}

export const getOneStudent = async (req, res) => {
  try {
      const viewRecord = await StudentRecord.findById(req.params.id);

      res.status(200).json({viewRecord});
  } catch (error) {
      res.status(404).json({
          message : "The requested data not found"
      })
  }
}

export const getAttendance = async (req, res) => {
  try {
      const attendanceRecord = await AttendanceRecord.find();
      
      res.status(200).json({attendanceRecord});
      
  } catch (error) {
      res.status(404).json({
          message : "Data not found"
      })
  }

}

export const createAttendance = async (req, res) => {
  const records = req.body
  const newRecord = new AttendanceRecord(records);
  try {
      const studentRecord = await StudentRecord.find({course: records.course, level: records.level, batch: records.year, section: records.section});
      // const studentRecord = await StudentRecord.find();
      const newrecord = [];
      studentRecord.map((record)=> {
          newrecord.push(new AttendanceStudentRecord({attendanceId:String(newRecord._id),  name: `${record.firstname} ${record.middlename} ${record.lastname}` , studentId: String(record._id), attendance: []})); 
      })
      
      const attendanceStudentRecords = await AttendanceStudentRecord.insertMany(newrecord);
      
      await newRecord.save();

      res.status(201).json({newRecord});
  } catch (error) {
      res.status(409).json({
          message : "Data not saved"
      })
  }
}

export const updateAttendance = async (req, res) => {
  const records = req.body;

  try {
      let updateRecord = await AttendanceRecord.findByIdAndUpdate(req.params.id, records);

      updateRecord = await updateRecord.save();

      res.status(200).json({updateRecord});
  } catch (error) {
      res.status(404).json({
          message : "Cannot update record of id" + req.params.id
      });
  }
}

export const deleteAttendance = async (req, res) => {
  try {
      await AttendanceRecord.findByIdAndRemove(req.params.id);

      res.status(200).json({
          message : "Record deleted"
      })
  } catch (error) {
      res.status(404).json({
          message : "Could not delete the record of id" + req.params.id
      })
  }
}

export const searchAttendance = async (req, res) => {
  try {
      const searchRecord = await AttendanceRecord.findOne({id : req.params.id});

      res.status(200).json({searchRecord});
  } catch (error) {
      res.status(404).json({
          message : "The requested data not found"
      })
  }
}

export const getOneAttendance = async (req, res) => {
  try {
      const viewRecord = await AttendanceRecord.findById(req.params.id);

      res.status(200).json({viewRecord});
  } catch (error) {
      res.status(404).json({
          message : "The requested data not found"
      })
  }
}

export const getAttendanceStudents = async (req, res) => {
  const record = req.body;
  try {
      const attendanceStudentRecord = await AttendanceStudentRecord.find({attendanceId: req.params.id});

      res.status(200).json({attendanceStudentRecord});
      
  } catch (error) {
      // console.log("rohan");
      res.status(404).json({
          message : "Data not found in mongodb " + record
      })
  }

}

export const createAttendanceStudent = async (req, res) => {
  const records = req.body
  const newRecord = new AttendanceStudentRecord(records);
  try {
     await newRecord.save();

      res.status(201).json({newRecord});
  } catch (error) {
      res.status(409).json({
          message : "Data not saved"
      })
  }
}

export const updateAttendanceStudent = async (req, res) => {
  const records = req.body;
  try {
      let updateRecord = await AttendanceStudentRecord.findByIdAndUpdate(req.params.id, records);

      updateRecord = await updateRecord.save();

      res.status(200).json({updateRecord});
  } catch (error) {
      res.status(404).json({
          message : "Cannot update record of id" + req.params.id
      });
  }
}

export const takeAttendanceStudent = async (req, res) => {
  // const records = req.body;
  // console.log(records);
  try {
      const attendanceStudentRecord = await AttendanceStudentRecord.find({_id: req.params.id});
      // console.log(attendanceStudentRecord[0].attendance);
      const fullDate = new Date();
      const dateString = `${fullDate.getFullYear()} ${fullDate.getMonth()+1} ${fullDate.getDate()}`;
      const currentRecord = attendanceStudentRecord[0];
      let dataChanged = false;
      currentRecord.attendance.map((element)=>{
          if(element.date === dateString) {
              if (element.status) element.status = false;
              else element.status = true;
              dataChanged = true;
          }
      })
      if(!dataChanged) currentRecord.attendance.push({date:dateString,status: true});
      // console.log(attendanceStudentRecord[0]);
      let updateRecord = await AttendanceStudentRecord.findByIdAndUpdate(req.params.id, attendanceStudentRecord[0]);


      // let updateRecord = await AttendanceStudentRecord.findByIdAndUpdate(req.params.id, records);

      updateRecord = await updateRecord.save();

      res.status(200).json({changed: true});
  } catch (error) {
      res.status(404).json({
          message : "Cannot update record of id" + req.params.id
      });
  }
}

export const checkAttendanceStudent = async (req, res) => {
  // const records = req.body;
  // console.log(records);
  try {
      const attendanceStudentRecord = await AttendanceStudentRecord.find({_id: req.params.id});
      // console.log(attendanceStudentRecord[0].attendance);
      const fullDate = new Date();
      const dateString = `${fullDate.getFullYear()} ${fullDate.getMonth()+1} ${fullDate.getDate()}`;
      const currentRecord = attendanceStudentRecord[0];
      let attendanceStatus = false;
      currentRecord.attendance.map((element)=>{
          if(element.date === dateString) {
              if (element.status) attendanceStatus = true;
          }
      })
      res.status(200).json({attStatus: attendanceStatus});
  } catch (error) {
      res.status(404).json({
          message : "Cannot update record of id" + req.params.id
      });
  }
}


export const countAttendanceStudent = async (req, res) => {
  // const records = req.body;
  // console.log(records);
  try {
      const attendanceStudentRecord = await AttendanceStudentRecord.find({_id: req.params.id});
      const currentRecord = attendanceStudentRecord[0];
      let presentCount = 0;
      currentRecord.attendance.map((element)=>{
          if(element.status === true) presentCount++;
      })
      const percentCount = (presentCount/currentRecord.attendance.length)*100;
      res.status(200).json({perCount:percentCount});
  } catch (error) {
      res.status(404).json({
          message : "Cannot update record of id" + req.params.id
      });
  }
}

export const deleteAttendanceStudent = async (req, res) => {
  try {
      await AttendanceStudentRecord.findByIdAndRemove(req.params.id);

      res.status(200).json({
          message : "Record deleted"
      })
  } catch (error) {
      res.status(404).json({
          message : "Could not delete the record of id" + req.params.id
      })
  }
}

export const searchAttendanceStudent = async (req, res) => {
  try {
      const searchRecord = await AttendanceStudentRecord.findOne({id : req.params.id});

      res.status(200).json({searchRecord});
  } catch (error) {
      res.status(404).json({
          message : "The requested data not found"
      })
  }
}

export const getOneAttendanceStudent = async (req, res) => {
  try {
      const viewRecord = await AttendanceStudentRecord.findById(req.params.id);

      res.status(200).json({viewRecord});
  } catch (error) {
      res.status(404).json({
          message : "The requested data not found"
      })
  }
}

export const getPersonalTutor = async (req, res) => {
  // const records = req.body;
  try {
      // const personalTutorRecord = await PersonalTutorRecord.findById(req.params.id);
      const personalTutorRecord = await PersonalTutorRecord.find();
      
      res.status(200).json({personalTutorRecord});
  } catch (error) {
      res.status(404).json({
          message : "Data not found"
      })
  }

}

export const createPersonalTutor = async (req, res) => {
  const records = req.body
  const newRecord = new PersonalTutorRecord(records);
  try {
      await newRecord.save();

      res.status(201).json({newRecord});
  } catch (error) {
      res.status(409).json({
          message : "Data not saved"
      })
  }
}

export const updatePersonalTutor = async (req, res) => {
  const records = req.body;

  try {
      let updateRecord = await PersonalTutorRecord.findByIdAndUpdate(req.params.id, records);

      updateRecord = await updateRecord.save();

      res.status(200).json({updateRecord});
  } catch (error) {
      res.status(404).json({
          message : "Cannot update record of id" + req.params.id
      });
  }
}

export const deletePersonalTutor = async (req, res) => {
  try {
      await PersonalTutorRecord.findByIdAndRemove(req.params.id);

      res.status(200).json({
          message : "Record deleted"
      })
  } catch (error) {
      res.status(404).json({
          message : "Could not delete the record of id" + req.params.id
      })
  }
}

export const searchPersonalTutor = async (req, res) => {
  try {
      const searchRecord = await PersonalTutorRecord.findOne({id : req.params.id});

      res.status(200).json({searchRecord});
  } catch (error) {
      res.status(404).json({
          message : "The requested data not found"
      })
  }
}

export const getOnePersonalTutor = async (req, res) => {
  try {
      const viewRecord = await PersonalTutorRecord.findById(req.params.id);

      res.status(200).json({viewRecord});
  } catch (error) {
      res.status(404).json({
          message : "The requested data not found"
      })
  }
}

export const getPersonalTutorStudents = async (req, res) => {
    
  const record = req.body;
  try {
      const personalTutorStudentRecord = await PersonalTutorStudentRecord.find({personalTutorId: req.params.id});
      
      res.status(200).json({personalTutorStudentRecord});
      
  } catch (error) {
      // console.log("rohan");
      res.status(404).json({
          message : "Data not found in mongodb " + record
      })
  }

}

export const createPersonalTutorStudent = async (req, res) => {
  const records = req.body
  const newRecord = new PersonalTutorStudentRecord(records);
  try {
      await newRecord.save();

      res.status(201).json({newRecord});
  } catch (error) {
      res.status(409).json({
          message : "Data not saved"
      })
  }
}

export const updatePersonalTutorStudent = async (req, res) => {
  const records = req.body;

  try {
      let updateRecord = await PersonalTutorStudentRecord.findByIdAndUpdate(req.params.id, records);

      updateRecord = await updateRecord.save();

      res.status(200).json({updateRecord});
  } catch (error) {
      res.status(404).json({
          message : "Cannot update record of id" + req.params.id
      });
  }
}

export const deletePersonalTutorStudent = async (req, res) => {
  try {
      await PersonalTutorStudentRecord.findByIdAndRemove(req.params.id);

      res.status(200).json({
          message : "Record deleted"
      })
  } catch (error) {
      res.status(404).json({
          message : "Could not delete the record of id" + req.params.id
      })
  }
}

export const searchPersonalTutorStudent = async (req, res) => {
  try {
      const searchRecord = await PersonalTutorStudentRecord.findOne({id : req.params.id});

      res.status(200).json({searchRecord});
  } catch (error) {
      res.status(404).json({
          message : "The requested data not found"
      })
  }
}

export const getOnePersonalTutorStudent = async (req, res) => {
  try {
      const viewRecord = await PersonalTutorStudentRecord.findById(req.params.id);

      res.status(200).json({viewRecord});
  } catch (error) {
      res.status(404).json({
          message : "The requested data not found"
      })
  }
}

export const getCourse = async (req, res) => {
  try {
    const courseRecord = await CourseRecord.find();

    res.status(200).json({ courseRecord });
  } catch (error) {
    res.status(404).json({
      message: "Data not found",
    });
  }
};

export const createCourse = async (req, res) => {
  
  const records = req.body;
  
  const newRecord = new CourseRecord(records);
  try {
    await newRecord.save();

    res.status(201).json({ newRecord });
  } catch (error) {
    res.status(409).json({
      message: "Data not saved",
    });
  }
};

export const updateCourse = async (req, res) => {
  const records = req.body;

  try {
    let updateRecord = await CourseRecord.findByIdAndUpdate(
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

export const deleteCourse = async (req, res) => {
  try {
    await CourseRecord.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Record deleted",
    });
  } catch (error) {
    res.status(404).json({
      message: "Could not delete the record of id" + req.params.id,
    });
  }
};

export const searchCourse = async (req, res) => {
  try {
    const searchRecord = await CourseRecord.findOne({ id: req.params.id });

    res.status(200).json({ searchRecord });
  } catch (error) {
    res.status(404).json({
      message: "The requested data not found",
    });
  }
};

export const getOneCourse = async (req, res) => {
  try {
    const viewRecord = await CourseRecord.findById(req.params.id);

    res.status(200).json({ viewRecord });
  } catch (error) {
    res.status(404).json({
      message: "The requested data not found",
    });
  }
};



export const getTimetable = async (req, res) => {
  try {
    const timetableRecord = await TimetableRecord.find();

    res.status(200).json({ timetableRecord });
  } catch (error) {
    res.status(404).json({
      message: "Data not found",
    });
  }
};

export const createTimetable = async (req, res) => {
  
  const records = req.body;
  
  const newRecord = new TimetableRecord(records);
  try {
    await newRecord.save();

    res.status(201).json({ newRecord });
  } catch (error) {
    res.status(409).json({
      message: "Data not saved",
    });
  }
};

export const updateTimetable = async (req, res) => {
  const records = req.body;

  try {
    let updateRecord = await TimetableRecord.findByIdAndUpdate(
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

export const deleteTimetable = async (req, res) => {
  try {
    await TimetableRecord.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Record deleted",
    });
  } catch (error) {
    res.status(404).json({
      message: "Could not delete the record of id" + req.params.id,
    });
  }
};



export const getOneTimetable = async (req, res) => {
  try {
    const viewRecord = await TimetableRecord.findById(req.params.id);

    res.status(200).json({ viewRecord });
  } catch (error) {
    res.status(404).json({
      message: "The requested data not found",
    });
  }
};
