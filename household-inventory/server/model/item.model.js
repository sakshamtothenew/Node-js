const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,

    },
    isSanitized: {
        type: Boolean,
        required: true
    },

    expiryDate: {
        type: Date,
        default: Date.now,
        required: true
    }, 
    createdDate: {
        type: Date,
        default: Date.now,
       
    },
    updatedDate: {
        type: Date,
        default : Date.now,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})


const itemModel = mongoose.model("items", itemSchema)

module.exports = itemModel;