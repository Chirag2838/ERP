const Admin = require("../../models/admin")

const login = async (req, res) => {
    try {
        const admin = await Admin.findByCredentials(req.body.username, req.body.password);
        const token = await admin.generateAuthToken();
        res.send({token});
    } catch (e) {
        res.status(400).send();
    }
}

module.exports = login;