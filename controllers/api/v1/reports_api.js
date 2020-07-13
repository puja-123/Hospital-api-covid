const Doctor = require('../../../models/report');
module.exports.allReportsWithStatus = async function(req ,res){
    try{
        let statusList = ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit'];
        if(statusList.indexOf(req.params.status) == -1){
          return res.status(422).json({
            message: "Invalid details"
          });
        }
        //find all the reports that match the given status and fetch doctor and patient details
        let reports = await Report.find({status: req.params.status})
          .populate({
            path: 'doctor',
            select: 'username -_id'
          })
          .populate({
            path: 'patient',
            select: 'mobile -_id'
          });
        
          //return all matching reports
        return res.status(200).json({
          message: "All reports whose status is " + req.params.status,
          reports: reports
        });
      }catch(err){
        return res.status(500).json({
          message: "Internal Server Error"
        });
      }
}