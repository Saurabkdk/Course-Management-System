import mongoose from "mongoose";

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    admin_id : Number,
    password: String
})

export const Admin = mongoose.model('Admin', adminSchema);

const staffSchema = new Schema({
    id : Number,
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
    id : Number,
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
    id : Number,
    module_name : String,
    information : String,
    set_on_date : String,
});

export const DiaryRecord = mongoose.model('DiaryRecord', diarySchema); 

