const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const DocTypeSchema = new Schema({

    type_name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        default: ""
    }
})

module.exports = mongoose.model('DocType', DocTypeSchema);