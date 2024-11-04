const DocumentLog = require("../models/documentLog");
const Document = require("../models/document");



// create document log
const createDocLog = async (req, res) => {

    const docId = req.params.docId;

    const { action, action_office_id } = req.body;

    let document;
    try {
        document = await Document.findById(docId);
    } catch (error) {
        return console.log(error)
    }

    if (!document) {
        return res.status(404).json({message: "No document found by this Id"})
    }

    const documentLog = new DocumentLog({
        action,
        action_office_id,
        document_id: docId
    })

    try {
        await documentLog.save()
    } catch (error) {
        return console.log(error)
    }

    return res.status(201).json({documentLog});
}


// Get all document log by docId
const getAllDocLog = async (req, res) => {

    const docId = req.params.docId;

    let documentLogs;

    try {
        documentLogs = await DocumentLog.find({document_id: docId});
    } catch (error) {
        return console.log(error)
    }

    if (!documentLogs || documentLogs.length === 0) {
        return res.status(404).json({message: "No DocLog found"})
    }
    
    return res.status(200).json({documentLogs});
}

module.exports = {

    createDocLog,
    getAllDocLog
}