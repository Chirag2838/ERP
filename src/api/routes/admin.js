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
const login = require('../controllers/login.controller');

router.get('/admin/login', login);

router.post('/admin/createFaculty', auth, createFaculty);

router.post('/admin/createStudent', auth, createStudent);

router.get('/admin/findFaculty/:username', auth, findFaculty);

router.get('/admin/findStudent/:username', auth, findStudent);

router.post('/admin/changeFacultyPass', auth, changeFacultyPass);

router.post('/admin/changeStudentPass', auth, changeStudentPass);

router.post('/admin/updateFees', auth, updateFees);

router.post('/admin/createClass', auth, createClass);

router.post('/admin/submitFees', auth, submitFees);

module.exports = router;