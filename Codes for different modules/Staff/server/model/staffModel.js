import mongoose from "mongoose";

const Schema = mongoose.Schema;

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

const StaffRecord = mongoose.model('StaffRecord', staffSchema);

export default StaffRecord;