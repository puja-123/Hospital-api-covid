const mongoose = require('mongoose');
//create report schema
const reportSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Doctor'
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Patient'
  },
  status: {
    type: String,
    required: true,
    enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit']
  },
  date : {
    type: String,
    required: true
  }
},{
  timestamps: true
});
//create a model
const Report = mongoose.model('Report', reportSchema);
// export
module.exports = Report;