const Student = require("../../models/student");
const Class = require("../../models/class");

const createStudent = async (req, res) => {
    try {
        const student = await Student.findOne({$or : [{username : req.body.username}, {admNumber : req.body.admNumber}]});
        if(!student) {
            const hisClass = await Class.findOne({label : req.body.class});
            if (hisClass) {
                const newStudent = new Student(req.body);
                newStudent.feesDues.admissionFeesDue = hisClass.admissionFees;
                newStudent.feesDues.feesDue = hisClass.fees;
                await newStudent.save();
                return res.send(newStudent);
            }
            return res.send(401).send();
        }
        res.status(401).send('Student must have unique username and admission number');
    } catch (e) {
        res.status(400).send();
    }
}

module.exports = createStudent;