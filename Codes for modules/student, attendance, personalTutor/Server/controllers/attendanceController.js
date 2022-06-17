import { AttendanceRecord} from '../model/attendanceModel.js';
import { StudentRecord} from '../model/studentModel.js';
import { AttendanceStudentRecord} from '../model/attendanceStudentModel.js';

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
