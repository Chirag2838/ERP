const Class = require("../../models/class");

const updateFees = async (req, res) => {
    const label = req.body.label;
    console.log(label);
    const admissionFees = req.body.admissionFees;
    const fees = req.body.fees;
    try {
        const fetchClass = await Class.findOneAndUpdate({label},{admissionFees, fees});
        console.log(fetchClass);
        if (!fetchClass) {
            return res.status(401).send();
        }
        res.send(fetchClass);
    } catch (e) {
        res.status(400).send();
    }
}

module.exports = updateFees;