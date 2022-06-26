import mongoose from "mongoose";

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    admin_id : Number,
    password: String
})

export const Admin = mongoose.model('Admin', adminSchema);

const staffSchema = new Schema({
    id : {type : Number, unique : true},
    status : String,
    dormant : String,
    firstname : String,
    middlename : String,
    surname : String,
    address : String,
    telephone : String,
    email : String,
    role : [String],
    subject : [String],
});

export const StaffRecord = mongoose.model('StaffRecord', staffSchema);

const moduleSchema = new Schema({
    id : {type : Number, unique : true},
    module_name : String,
    staff : [{
        type : 'ObjectId', ref: 'StaffRecord',
    }],
    link : String
});

export const ModuleRecord = mongoose.model('ModuleRecord', moduleSchema); 

const assignmentSchema = new Schema({
    assignment : String,
    module : {
        type : 'ObjectId', ref : 'ModuleRecord'
    },
    file_link : String,
    desc : String
})

export const AssignmentRecord = mongoose.model('Assignment', assignmentSchema);

const assignmentSubmitSchema = new Schema({
    student : {
        type : 'ObjectId', ref : 'StaffRecord'
    },
    student_id : Number,
    student_name : String,
    module_name : String,
    submission_link : String,
    grade : String,
    feedback : String
})

export const SubmissionRecord = mongoose.model('SubmissionRecord', assignmentSubmitSchema);

const diarySchema = new Schema({
    id : {type : Number, unique : true},
    module_name : String,
    information : String,
    set_on_date : String,
});

export const DiaryRecord = mongoose.model('DiaryRecord', diarySchema); 

const studentSchema = new Schema({
    id: {type : Number, unique : true},
    password : String,
    applied: Boolean,
    batch: String,
    level: String,
    section: String,
    firstname: String,
    middlename : String,
    lastname: String,
    addresstemporary : String,
    addresspermanent : String,
    contact: String,
    course: String,
    dob: String,
    email: String,
    status: String,
    ifDormant: String,
    entryqualification: String
});

export const StudentRecord = mongoose.model('StudentRecord', studentSchema);

const attendanceSchema = new Schema({
    name: String,
    course: String,
    module: String,
    level: String, 
    section: String,
    year: String,
});

export const AttendanceRecord = mongoose.model('AttendanceRecord', attendanceSchema);

const attendanceStudentSchema = new Schema({
    attendanceId: String,
    name: String,
    studentId: String,
    attendance: Array,
 });
 
 export const AttendanceStudentRecord = mongoose.model('AttendanceStudentRecord', attendanceStudentSchema);

 const personalTutorSchema = new Schema({
    // id : Number,
    // status : String,
    // dormant : String,
    // firstname : String,
    // middlename : String,
    // surname : String,
    // address : String,
    // telephone : String,
    // email : String,
    // role : [String],
    // subject : [String],
   name:String,
});

export const PersonalTutorRecord = mongoose.model('PersonalTutorRecord', personalTutorSchema);

const personalTutorStudentSchema = new Schema({
   personalTutorId: String,
   studentName: String,
   studentLevel: String, 
   studentBatch: String,
   course: String


});

export const PersonalTutorStudentRecord = mongoose.model('PersonalTutorStudentRecord', personalTutorStudentSchema);

const courseSchema = new Schema({
    id: Number,
    name : String,
    year : Number,
    totalmodule: Number,
    module: [String],

    
});
export const CourseRecord = mongoose.model('CourseRecord', courseSchema);

const timetableSchema = new Schema({
   coursename:String,
   level:String,
   section:String,
   modulename1:String,
   modulename2:String,
   modulename3:String,
   modulename4:String,
   modulename5:String,
   modulename6:String,

});

export const TimetableRecord = mongoose.model('TimetableRecord', timetableSchema);

