import mongoose from "mongoose";

const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
    // id : Number,
    // status : String,
    // dormant : String,
    // firstname : String,
    // middlename : String,
    // surname : String,
    // address : String,
    // telephone : String,
    name: String,
    course: String,
    module: String,
    level: String, 
    section: String,
    year: String,
});

export const AttendanceRecord = mongoose.model('AttendanceRecord', attendanceSchema);

