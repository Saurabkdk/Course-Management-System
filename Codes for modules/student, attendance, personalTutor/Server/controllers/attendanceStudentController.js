import { AttendanceStudentRecord} from '../model/attendanceStudentModel.js';

export const getAttendanceStudents = async (req, res) => {
    const record = req.body;
    try {
        const attendanceStudentRecord = await AttendanceStudentRecord.find({attendanceId: req.params.id});

        res.status(200).json({attendanceStudentRecord});
        
    } catch (error) {
        // console.log("rohan");
        res.status(404).json({
            message : "Data not found in mongodb " + record
        })
    }

}

export const createAttendanceStudent = async (req, res) => {
    const records = req.body
    const newRecord = new AttendanceStudentRecord(records);
    try {
       await newRecord.save();

        res.status(201).json({newRecord});
    } catch (error) {
        res.status(409).json({
            message : "Data not saved"
        })
    }
}

export const updateAttendanceStudent = async (req, res) => {
    const records = req.body;
    try {
        let updateRecord = await AttendanceStudentRecord.findByIdAndUpdate(req.params.id, records);

        updateRecord = await updateRecord.save();

        res.status(200).json({updateRecord});
    } catch (error) {
        res.status(404).json({
            message : "Cannot update record of id" + req.params.id
        });
    }
}

export const takeAttendanceStudent = async (req, res) => {
    // const records = req.body;
    // console.log(records);
    try {
        const attendanceStudentRecord = await AttendanceStudentRecord.find({_id: req.params.id});
        // console.log(attendanceStudentRecord[0].attendance);
        const fullDate = new Date();
        const dateString = `${fullDate.getFullYear()} ${fullDate.getMonth()+1} ${fullDate.getDate()}`;
        const currentRecord = attendanceStudentRecord[0];
        let dataChanged = false;
        currentRecord.attendance.map((element)=>{
            if(element.date === dateString) {
                if (element.status) element.status = false;
                else element.status = true;
                dataChanged = true;
            }
        })
        if(!dataChanged) currentRecord.attendance.push({date:dateString,status: true});
        // console.log(attendanceStudentRecord[0]);
        let updateRecord = await AttendanceStudentRecord.findByIdAndUpdate(req.params.id, attendanceStudentRecord[0]);


        // let updateRecord = await AttendanceStudentRecord.findByIdAndUpdate(req.params.id, records);

        updateRecord = await updateRecord.save();

        res.status(200).json({changed: true});
    } catch (error) {
        res.status(404).json({
            message : "Cannot update record of id" + req.params.id
        });
    }
}

export const checkAttendanceStudent = async (req, res) => {
    // const records = req.body;
    // console.log(records);
    try {
        const attendanceStudentRecord = await AttendanceStudentRecord.find({_id: req.params.id});
        // console.log(attendanceStudentRecord[0].attendance);
        const fullDate = new Date();
        const dateString = `${fullDate.getFullYear()} ${fullDate.getMonth()+1} ${fullDate.getDate()}`;
        const currentRecord = attendanceStudentRecord[0];
        let attendanceStatus = false;
        currentRecord.attendance.map((element)=>{
            if(element.date === dateString) {
                if (element.status) attendanceStatus = true;
            }
        })
        res.status(200).json({attStatus: attendanceStatus});
    } catch (error) {
        res.status(404).json({
            message : "Cannot update record of id" + req.params.id
        });
    }
}


export const countAttendanceStudent = async (req, res) => {
    // const records = req.body;
    // console.log(records);
    try {
        const attendanceStudentRecord = await AttendanceStudentRecord.find({_id: req.params.id});
        const currentRecord = attendanceStudentRecord[0];
        let presentCount = 0;
        currentRecord.attendance.map((element)=>{
            if(element.status === true) presentCount++;
        })
        const percentCount = (presentCount/currentRecord.attendance.length)*100;
        res.status(200).json({perCount:percentCount});
    } catch (error) {
        res.status(404).json({
            message : "Cannot update record of id" + req.params.id
        });
    }
}

export const deleteAttendanceStudent = async (req, res) => {
    try {
        await AttendanceStudentRecord.findByIdAndRemove(req.params.id);

        res.status(200).json({
            message : "Record deleted"
        })
    } catch (error) {
        res.status(404).json({
            message : "Could not delete the record of id" + req.params.id
        })
    }
}

export const searchAttendanceStudent = async (req, res) => {
    try {
        const searchRecord = await AttendanceStudentRecord.findOne({id : req.params.id});

        res.status(200).json({searchRecord});
    } catch (error) {
        res.status(404).json({
            message : "The requested data not found"
        })
    }
}

export const getOneAttendanceStudent = async (req, res) => {
    try {
        const viewRecord = await AttendanceStudentRecord.findById(req.params.id);

        res.status(200).json({viewRecord});
    } catch (error) {
        res.status(404).json({
            message : "The requested data not found"
        })
    }
}
