const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DocLogSchema = new Schema ({

    action: {
        type: String,
        enum: ["created", "signed", "moved"],
        default: "created"
    },

    timestamp: {
        type: Date,
        default: Date.now
    },

    action_office_id: {
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


module.exports = mongoose.model('DocumentLog', DocLogSchema);