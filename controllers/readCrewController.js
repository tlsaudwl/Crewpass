const db=require("../models/index"),
    Crew=db.crew_info,
    CrewRecruit=db.crewrecruit_detail;

exports.showreadCrew=async(req,res)=>{
    try{
        crewinfo=await Crew.findOne({
            where: {identify_numb_manager: req.params.identify_numb_manager}
        });
        crewrecruit=await CrewRecruit.findOne({
            where: {identify_numb_manager: req.params.identify_numb_manager}
        });
        res.render("readCrew",{
            crew_info: crewinfo,
            crewrecruit_detail: crewrecruit           
        });
    }catch(err){
        res.status(500).send({
            message:err.message
        });
    }
}