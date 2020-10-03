const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const adminSchema = new mongoose.Schema({
    username : 'String',
    password : 'String',
    token : 'String'
});

adminSchema.statics.findByCredentials = async (username, password) => {
    const admin = await Admin.findOne({username, password});
    if (!admin)
        throw new Error('Incorrect Credentials');
    return admin;
}

adminSchema.methods.generateAuthToken = async function () {
    const admin = this;
    const token = jwt.sign({_id : admin._id.toString()}, process.env.JWT_KEY);
    admin.token = token;
    await admin.save();

    return token;
}

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;