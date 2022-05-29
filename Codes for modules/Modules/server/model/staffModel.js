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

export const StaffRecord = mongoose.model('StaffRecord', staffSchema);

const moduleSchema = new Schema({
    id : Number,
    module_name : String,
    staff : [String],
    link : String
});

export const ModuleRecord = mongoose.model('ModuleRecord', moduleSchema); 

