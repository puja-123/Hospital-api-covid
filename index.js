const express = require('express');
const port = 8000;

//include database
const db = require('./config/mongoose');

//include passport library
const passport = require('passport');

//include passport jwt config file
const passportJWT = require('./config/passport-jwt-strategy');

//include express middleware
const app = express();

const bodyParser = require('body-parser');

//parse application/json and look for raw text                                        
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));

//redirect all urls to routes 
app.use('/', require('./routes'));

//start the express on specefied port
app.listen(port, function(err){
  if(err){
    console.log(`Error in running the server ${err}`);
  }
  console.log(`Express is running on the port: ${port}`);
});

// for testing
module.exports = app;