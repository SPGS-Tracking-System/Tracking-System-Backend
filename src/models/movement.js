const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const movementSchema = new Schema({

    timestamp: {
        type: Date,
        default: Date.now
    },

    from_office: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Office",
        required: true
    },

    to_office: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Office",
        required: true
    },

    document_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Document",
        required: true
    }
})

module.exports = mongoose.model('Movement', movementSchema);