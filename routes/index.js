const express =  require('express');
const router = express.Router();
// const homeController = require('../controllers/home_controller');
console.log("router loaded");
router.use('/api' ,require('./api'));
module.exports = router ;