import mongoose from "mongoose";

const Schema = mongoose.Schema;

const personalTutorStudentSchema = new Schema({
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
   personalTutorId: String,
   studentName: String,
   studentLevel: String, 
   studentBatch: String,
   course: String


});

export const PersonalTutorStudentRecord = mongoose.model('PersonalTutorStudentRecord', personalTutorStudentSchema);

