import mongoose from "mongoose";

const Schema = mongoose.Schema;

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

