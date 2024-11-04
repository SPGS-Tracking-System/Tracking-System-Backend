const Movement = require("../models/movement");
const Document = require("../models/document");



// create movement of doc
const createMovement = async (req, res) => {

    const docId = req.params.docId;

    const { from_office, to_office } = req.body;

    let document
    try {
        document = await Document.findById(docId);
    } catch (error) {
        return console.log(error)
    }

    if (!document) {
        return res.status(404).json({message: "No document found by this Id"})
    }

    const movement = new Movement({
        from_office,
        to_office,
        document_id: docId
    })

    try {
        await movement.save()
    } catch (error) {
        return console.log(error)
    }

    return res.status(201).json({movement});
}


// Get all document movement by docId
const getAllDocMovement = async (req, res) => {

    const docId = req.params.docId;

    let movements;

    try {
        movements = await Movement.find({document_id: docId});
    } catch (error) {
        return console.log(error)
    }

    if (!movements || movements.length === 0) {
        return res.status(404).json({message: "No movement of doc found"})
    }
    
    return res.status(200).json({movements});
}

module.exports = {

    createMovement,
    getAllDocMovement
}