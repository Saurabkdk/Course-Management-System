import mongoose from "mongoose";

const Schema = mongoose.Schema;

const attendanceStudentSchema = new Schema({
   attendanceId: String,
   name: String,
   studentId: String,
   attendance: Array,
});

export const AttendanceStudentRecord = mongoose.model('AttendanceStudentRecord', attendanceStudentSchema);

