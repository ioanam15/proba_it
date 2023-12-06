const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pollSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    votingType: {
        type: String ///single, multiple 
    },
    answers: [{
        varianta: {
            type: String
        },
        nrVoturi: {
            type: Number
        }
    }]
});

module.exports = mongoose.model('Poll', pollSchema);