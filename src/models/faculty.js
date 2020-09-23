const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
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
    facId : {
        type : 'Number',
        required : true
    },
    email : {
        type : 'String',
        required : true,
        trim : true
    },
    salaryCounter : {
        type : 'Number',
        default : 0
    }
});

facultySchema.methods.toJSON = function () {
    console.log(this);
    const faculty = this;
    const facultyObj = faculty.toObject();

    delete facultyObj.password;
    return facultyObj;
}

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;