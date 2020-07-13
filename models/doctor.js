const mongoose = require('mongoose');
//create doctor schema
const doctorSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
},{
  timestamps: true
});

//create a model
const Doctor = mongoose.model('Doctor', doctorSchema);
// export
module.exports = Doctor;