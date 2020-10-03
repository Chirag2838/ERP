const Faculty = require("../../models/faculty")

const createFaculty = async (req, res) => {
    try {
        const faculty = await Faculty.findOne({$or : [{username : req.body.username}, {facId: req.body.facId}]});
        if (!faculty) {
            const newFaculty = new Faculty(req.body);
            await newFaculty.save();
            res.send(`New Faculty ${req.body.firstname} has been added`);
        }
        res.status(401).send('Username or Faculty Id must be unique');
    } catch (e) {
        res.status(400).send();
    }
}

module.exports = createFaculty;