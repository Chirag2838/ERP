const Faculty = require('../../models/faculty');
const findFaculty = async (req, res) => {
    const username = req.params.username;
    try {
        const faculty = await Faculty.findOne({username});
        if (!faculty) {
            return res.status(401).send('no results');
        }
        res.send(faculty);
    } catch (e) {
        res.status(400).send();
    }
}

module.exports = findFaculty;