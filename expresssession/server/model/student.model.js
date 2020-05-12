const mongoose = require('mongoose')


const Schema = mongoose.Schema();

const studentSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    }
})

module.export.studentSchema = mongoose.model('students', studentSchema);