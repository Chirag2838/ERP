const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstname : {
        type : 'String',
        required : true,
        trim : true
    },
    lastname : {
        type : 'String',
        required : true,
        trim : true
    },
    username : {
        type : 'String',
        reuired : true,
        trim : true
    },
    password : {
        type : 'String',
        required : true,
        trim : true
    },
    dob : {
        type : 'Date',
        required : true,
    },
    admNumber : {
        type : 'Number',
        required : true
    },
    email : {
        type : 'String',
        required : true,
        trim : true
    },
    feesDues : {
        admissionFeesDue : {
            type : 'Number'
        },
        feesDue : {
            type : 'Number'
        }
    },
    class : {
        type : 'Number'
    }
});

studentSchema.methods.toJSON = function () {
    const student = this;
    const studentObj = student.toObject();

    delete studentObj.password;
    return studentObj;
}

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;