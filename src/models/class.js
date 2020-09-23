const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    label : {
        type : 'String',
    },
    admissionFees : {
        type : 'Number',
        default : 0
    },
    fees : {
        type : 'Number',
        default : 0
    }
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;