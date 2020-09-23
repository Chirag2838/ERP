const Student = require("../../models/student")

const findStudent = async (req, res) => {
    const username = req.params.username;
    try {
        const student = await Student.findOne({username});
        if (!student) {
            return res.status(401).send('no matches');
        }
        res.send(student);
    } catch (e) {
        res.status(400).send();
    }
}

module.exports = findStudent;