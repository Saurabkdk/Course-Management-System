import { PersonalTutorRecord} from '../model/personalTutorModel.js';

export const getPersonalTutor = async (req, res) => {
    try {
        const personalTutorRecord = await PersonalTutorRecord.find();
        
        res.status(200).json({personalTutorRecord});
    } catch (error) {
        res.status(404).json({
            message : "Data not found"
        })
    }

}

export const createPersonalTutor = async (req, res) => {
    const records = req.body
    const newRecord = new PersonalTutorRecord(records);
    try {
        await newRecord.save();

        res.status(201).json({newRecord});
    } catch (error) {
        res.status(409).json({
            message : "Data not saved"
        })
    }
}

export const updatePersonalTutor = async (req, res) => {
    const records = req.body;

    try {
        let updateRecord = await PersonalTutorRecord.findByIdAndUpdate(req.params.id, records);

        updateRecord = await updateRecord.save();

        res.status(200).json({updateRecord});
    } catch (error) {
        res.status(404).json({
            message : "Cannot update record of id" + req.params.id
        });
    }
}

export const deletePersonalTutor = async (req, res) => {
    try {
        await PersonalTutorRecord.findByIdAndRemove(req.params.id);

        res.status(200).json({
            message : "Record deleted"
        })
    } catch (error) {
        res.status(404).json({
            message : "Could not delete the record of id" + req.params.id
        })
    }
}

export const searchPersonalTutor = async (req, res) => {
    try {
        const searchRecord = await PersonalTutorRecord.findOne({id : req.params.id});

        res.status(200).json({searchRecord});
    } catch (error) {
        res.status(404).json({
            message : "The requested data not found"
        })
    }
}

export const getOnePersonalTutor = async (req, res) => {
    try {
        const viewRecord = await PersonalTutorRecord.findById(req.params.id);

        res.status(200).json({viewRecord});
    } catch (error) {
        res.status(404).json({
            message : "The requested data not found"
        })
    }
}
