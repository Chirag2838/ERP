const express = require('express');
const app = express();
const Admin = require('../models/admin');

const auth = async (req, res, next) => {
    try {
        const admin = await Admin.findOne({username : req.body.username, password : req.body.password});
        if (!admin)
            throw new Error();
        next();
    } catch (e) {
        res.status(401).send('No admin exists with this username');
    }
}

module.exports = auth;