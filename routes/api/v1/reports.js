const express = require('express');
//create a router
const router = express.Router();

//include passport
const passport = require('passport');

//include reports controller to process the correspondinga actions
const reportsApi = require('../../../controllers/api/v1/reports_api');

router.get('/:status', reportsApi.allReportsWithStatus);

//export router
module.exports = router;