const db = require("../models/index"),
        Crew = db.crew_info,
        application = db.application;

exports.showApply = async (req, res) => {
        try {
                identify_numb_manager=req.params.identify_numb_manager;
                let questions=await Crew.findOne({
                    where: {identify_numb_manager: req.params.identify_numb_manager}
                });
                res.locals.questions = questions;
                res.render("apply", {crew_info: questions});
        }catch(err) {
                res.status(500).send({
                        message: err.message
                });
        }

};

exports.submit_application = async (req, res) => {
        try{
            var supporter_numb = Math.random()*99999;
            identify_numb_manager=req.params.identify_numb_manager;
            await application.create(
                    {
                            supporter_numb : supporter_numb,
                            identify_numb_manager: req.params.identify_numb_manager,
                            email : req.body.email,
                            application_ans1 : req.body.application_ans1,
                            application_ans2 : req.body.application_ans2,
                            application_ans3 : req.body.application_ans3,
                            application_ans4 : req.body.application_ans4,
                            application_ans5 : req.body.application_ans5,
                            pass_TF: "미정"
                    });
            console.log("데이터 추가 완료");
            res.redirect("/index"); 
         }catch(err) {
                res.status(500).send({
                        message: err.message
                });
        }
};