import { PersonalTutorStudentRecord} from '../model/personalTutorStudentModel.js';

export const getPersonalTutorStudents = async (req, res) => {
    
    const record = req.body;
    try {
        const personalTutorStudentRecord = await PersonalTutorStudentRecord.find({personalTutorId: req.params.id});
        
        res.status(200).json({personalTutorStudentRecord});
        
    } catch (error) {
        // console.log("rohan");
        res.status(404).json({
            message : "Data not found in mongodb " + record
        })
    }

}

export const createPersonalTutorStudent = async (req, res) => {
    const records = req.body
    const newRecord = new PersonalTutorStudentRecord(records);
    try {
        await newRecord.save();

        res.status(201).json({newRecord});
    } catch (error) {
        res.status(409).json({
            message : "Data not saved"
        })
    }
}

export const updatePersonalTutorStudent = async (req, res) => {
    const records = req.body;

    try {
        let updateRecord = await PersonalTutorStudentRecord.findByIdAndUpdate(req.params.id, records);

        updateRecord = await updateRecord.save();

        res.status(200).json({updateRecord});
    } catch (error) {
        res.status(404).json({
            message : "Cannot update record of id" + req.params.id
        });
    }
}

export const deletePersonalTutorStudent = async (req, res) => {
    try {
        await PersonalTutorStudentRecord.findByIdAndRemove(req.params.id);

        res.status(200).json({
            message : "Record deleted"
        })
    } catch (error) {
        res.status(404).json({
            message : "Could not delete the record of id" + req.params.id
        })
    }
}

export const searchPersonalTutorStudent = async (req, res) => {
    try {
        const searchRecord = await PersonalTutorStudentRecord.findOne({id : req.params.id});

        res.status(200).json({searchRecord});
    } catch (error) {
        res.status(404).json({
            message : "The requested data not found"
        })
    }
}

export const getOnePersonalTutorStudent = async (req, res) => {
    try {
        const viewRecord = await PersonalTutorStudentRecord.findById(req.params.id);

        res.status(200).json({viewRecord});
    } catch (error) {
        res.status(404).json({
            message : "The requested data not found"
        })
    }
}
