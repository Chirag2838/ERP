const Faculty = require('../../models/faculty');
const changeFacultyPass = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const faculty = await Faculty.findOneAndUpdate({username},{password});
        if (!faculty) {
            return res.status(401).send({error : 'no faculty found'});
        }
        res.send(faculty);
    } catch (e) {
        console.log(e);
        res.status(400).send();
    }
}

module.exports = changeFacultyPass;