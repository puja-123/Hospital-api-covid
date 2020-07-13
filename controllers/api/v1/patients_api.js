const Patient = require('../../../models/patient');
const Report = require('../../../models/report');
const Doctor = require('../../../models/doctor');
// const jwt = require('jsonwebtoken');

//register patient
module.exports.register = async function(req,res)
{
    try{
    let patient = await Patient.findOne({mobile: req.body.mobile});
    if(patient){
      //if patient found send details
      return res.status(200).json({
        message: "Patient already registered",
        patient: patient
      })
    }
    else{
      //create patient if a patient with the given mobile number doesnt exist 
      patient = await Patient.create({
        mobile: req.body.mobile
      });
      return res.status(200).json({
        message: "Patient registered successfully",
        patient: patient
      })
    }
    }catch(err){
        console.log('Error : ' , err);
        return res.json(500 , {
            message : "Internal server error"
        });
    }
}

//create report
module.exports.createReport = async function(req, res){
    try{
      //check if the doctor and patient valid or not
    //   console.log(req.user.id);
      let doctor = await Doctor.findById(req.user.id);
      let patient = await Patient.findById(req.params.id, function(err){
        if(err){
          return res.status(401).json({
            message: "Invalid details"
          });
        }
      })
      if(doctor && patient){
        let statusList = ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit'];
        let status = statusList[Math.floor(Math.random() * statusList.length)];
        //current date
        let date = Date.now();
        //create report
        let report = await Report.create({
          doctor: doctor._id,
          patient: patient._id,
          status: status,
          date: date
        });
  
        //save the report in patients reports array
        patient.reports.push(report.id);
        patient.save();
  
        return res.status(200).json({
          message: "Report created successfully",
          report: report
        });
      }else{
        return res.status(401).json({
          message: "Invalid details"
        });
      }
    }catch(err){
      return res.status(500).json({
        message: `Internal Server Error` 
      });
    }
}
// all reports
module.exports.allReports = async function(req ,res){
      try{
        let patient = await Patient.findById(req.params.id);
        if(!patient){
            return res.status(401).json({
                message: "Invalid details"
              });
        }
        //fetch the reports of the given patient
        let reports = await Patient.findById(req.params.id)
        .sort('-createdAt')
        .populate({
        path: 'reports',
        select: 'doctor status date'
        });
        return res.status(200).json({
            patientMobile: reports.mobile,
            message: "All Reports of " + reports.mobile,
            reports: reports.reports
          });
      }catch(err){
        return res.status(500).json({
            message: "Internal Server Error"
          });
      }
}
