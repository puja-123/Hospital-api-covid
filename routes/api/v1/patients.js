const express = require('express');
//create a router
const router = express.Router();

//include passport for authentication
const passport = require('passport');

//include patients api 
const patientsApi= require('../../../controllers/api/v1/patients_api');

//authenticate using jwt strategy
router.post('/register', patientsApi.register);

router.get('/:id/create_report', patientsApi.createReport);

router.get('/:id/all_reports', patientsApi.allReports);

//export router
module.exports = router;