import { StaffRecord, ModuleRecord } from '../model/staffModel.js';

export const getStaff = async (req, res) => {
    try {
        const staffRecord = await StaffRecord.find();
        
        res.status(200).json({staffRecord});
    } catch (error) {
        res.status(404).json({
            message : "Data not found"
        })
    }

}

export const createStaff = async (req, res) => {
    // const {id, status, dormant, firstname, middlename, surname, address, telephone, email, role, subject} = req.body;
    const records = req.body
    // let newRecord = new StaffRecord({
    //     id,
    //     status,
    //     dormant,
    //     firstname,
    //     middlename,
    //     surname,
    //     address,
    //     telephone,
    //     email,
    //     role,
    //     subject
    // });
    const newRecord = new StaffRecord(records);
    try {
        await newRecord.save();

        res.status(201).json({newRecord});
    } catch (error) {
        res.status(409).json({
            message : "Data not saved"
        })
    }
}

export const updateStaff = async (req, res) => {
    const records = req.body;

    try {
        let updateRecord = await StaffRecord.findByIdAndUpdate(req.params.id, records);

        updateRecord = await updateRecord.save();

        res.status(200).json({updateRecord});
    } catch (error) {
        res.status(404).json({
            message : "Cannot update record of id" + req.params.id
        });
    }
}

export const deleteStaff = async (req, res) => {
    try {
        await StaffRecord.findByIdAndRemove(req.params.id);

        res.status(200).json({
            message : "Record deleted"
        })
    } catch (error) {
        res.status(404).json({
            message : "Could not delete the record of id" + req.params.id
        })
    }
}

export const searchStaff = async (req, res) => {
    try {
        const searchRecord = await StaffRecord.findOne({id : req.params.id});

        res.status(200).json({searchRecord});
    } catch (error) {
        res.status(404).json({
            message : "The requested data not found"
        })
    }
}

export const getOneStaff = async (req, res) => {
    try {
        const viewRecord = await StaffRecord.findById(req.params.id);

        res.status(200).json({viewRecord});
    } catch (error) {
        res.status(404).json({
            message : "The requested data not found"
        })
    }
}

export const getModule = async (req, res) => {
    try {
        const moduleRecord = await ModuleRecord.find();

        res.status(200).json({moduleRecord})
    } catch (error) {
        res.status(400).json({
            message : "Module not found"
        })
    }
}

export const createModule = async (req, res) => {
    const records = req.body;

    const newRecord = new ModuleRecord(records);
    try {
        await newRecord.save();

        res.status(201).json({newRecord});
    } catch (error) {
        res.status(409).json({
            message : "Module not saved"
        })
    }
}

export const updateModule = async (req, res) => {
    const records = req.body;

    try {
        let updateModule = await ModuleRecord.findByIdAndUpdate(req.params.id, records);

        updateModule = await updateModule.save();

        res.status(200).json({updateModule});
    } catch (error) {
        res.status(404).json({
            message : "Could not update the record with id " + req.params.id
        })
    }
}

export const deleteModule = async (req, res) => {
    try {
        await ModuleRecord.findByIdAndRemove(req.params.id);

        res.status(200).json({
            message : "Module deleted"
        })
    } catch (error) {
        res.status(404).json({
            message : "Could not delete the module of id " + req.params.id
        })
    }
}

export const searchModule = async (req, res) => {
    try {
         const searchModule = await ModuleRecord.findOne({id : req.params.id});

         res.status(200).json({searchModule});
    } catch (error) {
        res.status(404).json({
            message : "The requested data not found"
        })
    }
}

export const getOneModule = async (req, res) => {
    try {
        const viewRecord = await ModuleRecord.findById(req.params.id)

        res.status(200).json({viewRecord});
    } catch (error) {
        res.status(404).json({
            message : "The requested data not found"
        })
    }
}