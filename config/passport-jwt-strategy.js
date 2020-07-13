const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy; 
const ExtractJWT = require('passport-jwt').ExtractJwt;
const Doctor = require('../models/doctor');

let opts = {
    jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'hospital'
}

passport.use(new JWTStrategy(opts , function(jwtPayload, done){
    User.findById(jwtPayload._id , function(err, doctor){
        if(err){
            console.log("error in finding user from jwt") ;return ;
        }
if(doctor){
    return done(null, doctor);
}else{
    return done(null, false);
}
    })
}));

module.exports = passport;