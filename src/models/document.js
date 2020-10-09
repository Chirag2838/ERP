const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    class : {
        type : 'Number',
        required : true
    },
    subject : {
        type : 'String',
        required : true
    },
    contentType : {
        type : 'String',
        required : true
    },
    location : {
        type : 'String',
        required : true
    }
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;