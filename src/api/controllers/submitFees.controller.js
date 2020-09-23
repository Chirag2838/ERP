const Student = require("../../models/student");

const submitFees = async (req, res) => {
    const username = req.body.username;
    const feeType = req.body.type;
    const amount = req.body.amount;
    try {
        const student = await Student.findOne({username});
        if (!student) {
            return res.status(401).send();
        }
        if (feeType === 'admission') {
            student.feesDues.admissionFeesDue = student.feesDues.admissionFeesDue - amount;
        } else {
            student.feesDues.feesDue = student.feesDues.feesDue - amount;
        }
        await student.save();
        res.send(student.feesDues);
    } catch (e) {
        res.status(400).send();
    }
}

module.exports = submitFees;