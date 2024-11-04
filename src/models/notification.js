const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const notificationSchema = new Schema({

    message: {
        type: String,
        required: true
    },

    timestamp: {
        type: Date,
        default: Date.now
    },

    document_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Document",
        required: true
    },

    office_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Office",
        required: true
    }
})

module.exports = mongoose.model("Notification", notificationSchema);