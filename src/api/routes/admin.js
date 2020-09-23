const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const createFaculty = require('../controllers/createFaculty.controller');
const createStudent = require('../controllers/createStudent.controller');
const findFaculty = require('../controllers/findFaculty.controller');
const findStudent = require('../controllers/findStudent.controller');
const changeFacultyPass = require('../controllers/changeFacultyPass.controller');
const changeStudentPass = require('../controllers/changeStudentPass.controller');
const updateFees = require('../controllers/updateFees.controller');
const createClass = require('../controllers/createClass.controller');
const submitFees = require('../controllers/submitFees.controller');

router.get('/admin/login', auth, (req, res) => {
    res.send('You are logged in as Admin');
});

router.post('/admin/createFaculty', createFaculty);

router.post('/admin/createStudent', createStudent);

router.get('/admin/findFaculty/:username', findFaculty);

router.get('/admin/findStudent/:username', findStudent);

router.post('/admin/changeFacultyPass', changeFacultyPass);

router.post('/admin/changeStudentPass', changeStudentPass);

router.post('/admin/updateFees', updateFees);

router.post('/admin/createClass', createClass);

router.post('/admin/submitFees', submitFees);

module.exports = router;