const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decode = jwt.verify(token, process.env.JWT_KEY);
        const admin = await Admin.findOne({_id : decode._id, token});
        if (!admin)
            throw new Error();
        req.admin = admin;
        next();
    } catch (e) {
        res.status(401).status('Please Authenticate');
    }
}

module.exports = auth;