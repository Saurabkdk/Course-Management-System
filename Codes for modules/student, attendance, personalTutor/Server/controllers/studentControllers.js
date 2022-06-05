import { StudentRecord} from '../model/studentModel.js';

export const getStudent = async (req, res) => {
    try {
        const studentRecord = await StudentRecord.find();
        
        res.status(200).json({studentRecord});
    } catch (error) {
        res.status(404).json({
            message : "Data not found"
        })
    }

}

export const createStudent = async (req, res) => {
    const records = req.body
    const newRecord = new StudentRecord(records);
    try {
        await newRecord.save();

        res.status(201).json({newRecord});
    } catch (error) {
        res.status(409).json({
            message : "Data not saved"
        })
    }
}

export const updateStudent = async (req, res) => {
    const records = req.body;

    try {
        let updateRecord = await StudentRecord.findByIdAndUpdate(req.params.id, records);

        updateRecord = await updateRecord.save();

        res.status(200).json({updateRecord});
    } catch (error) {
        res.status(404).json({
            message : "Cannot update record of id" + req.params.id
        });
    }
}

export const deleteStudent = async (req, res) => {
    try {
        await StudentRecord.findByIdAndRemove(req.params.id);

        res.status(200).json({
            message : "Record deleted"
        })
    } catch (error) {
        res.status(404).json({
            message : "Could not delete the record of id" + req.params.id
        })
    }
}

export const searchStudent = async (req, res) => {
    try {
        const searchRecord = await StudentRecord.findOne({id : req.params.id});

        res.status(200).json({searchRecord});
    } catch (error) {
        res.status(404).json({
            message : "The requested data not found"
        })
    }
}

export const getOneStudent = async (req, res) => {
    try {
        const viewRecord = await StudentRecord.findById(req.params.id);

        res.status(200).json({viewRecord});
    } catch (error) {
        res.status(404).json({
            message : "The requested data not found"
        })
    }
}
