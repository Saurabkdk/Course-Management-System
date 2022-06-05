import mongoose from "mongoose";

const Schema = mongoose.Schema;

const studentSchema = new Schema({
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
    id: Number,
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

