const Doctor = require('../../../models/doctor');
const jwt = require('jsonwebtoken');

//doctor registration
module.exports.register = async function(req,res)
{
    try{
        let doctor = await Doctor.findOne({username: req.body.username});
        if(!doctor ){
            doctor = await Doctor.create(req.body);
            if(doctor){
                return res.json(200 , {
                    message : 'Registration Successful'
                });
            }    
        }else{
            return res.status(400, {
                message : 'User already exist'
            });
        }
    }catch(err){
        console.log('Error : ' , err);
        return res.json(500 , {
            message : "Internal server error"
        });
    }
}

//doctor login
module.exports.login = async function(req,res)
{
    try{
        let doctor = await Doctor.findOne({username: req.body.username});
        if( !doctor && doctor.password != req.body.password)
        {
            return res.json(401 , {
                message : 'Invalid username or password'
            });
        }
        return res.json(200 , {
            message : 'Login successful , here is ur token please keep it safe! ',
            data :{
                token :  jwt.sign(doctor.toJSON() , 'hospital' , {expiresIn : '100000'})
            }
        })
    }catch(err){
        console.log('Error : ' , err);
        return res.json(500 , {
            message : "Internal server error"
        });
    }
}