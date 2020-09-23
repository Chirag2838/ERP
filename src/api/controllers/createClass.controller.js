const Class = require("../../models/class")

const createClass = async (req, res) => {
    try {
        const newClass = new Class(req.body);
        await newClass.save();
        res.send(newClass);
    } catch (e) {
        res.status(400).send();
    }
}

module.exports = createClass;