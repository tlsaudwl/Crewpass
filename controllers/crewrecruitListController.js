const db = require("../models/index"),//다 가져와서
    CrewRecruit=db.crewrecruit_detail,
    Op = db.Sequelize.Op;

exports.showcrewrecruitList = async (req,res) => {
    try{
            data=await CrewRecruit.findAll({
                where:{identify_numb_manager:req.params.identify_numb_manager}
            });
            res.render("crewrecruitList",{
                crewrecruit_detail: data
            });
    }catch (err) {
            res.status(500).send({
                    message: err.message
            });
    }
};