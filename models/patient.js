const mongoose = require('mongoose');
//patient schema
const patientSchema = new mongoose.Schema({
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  reports: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Report'
    }
  ]
},{
  timestamps: true
});
//create model
const Patient = mongoose.model('Patient', patientSchema);
// export 
module.exports = Patient;