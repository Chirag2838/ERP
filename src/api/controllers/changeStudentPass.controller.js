const Student = require('../../models/student');
const changeStudentPass = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const student = await Student.findOneAndUpdate({username},{password});
        if (!student) {
            return res.status(401).send({error : 'no student found'});
        }
        res.send(student);
    } catch (e) {
        console.log(e);
        res.status(400).send();
    }
}

module.exports = changeStudentPass;