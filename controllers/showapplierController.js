const db = require("../models/index");
Crew_info = db.crew_info;
Application = db.application;

exports.showapplier = async (req, res) => {
        try {
                question_data = await Crew_info.findOne({
                        where: { identify_numb_manager : req.params.identify_numb_manager }
                });

                answer_data = await Application.findOne({
                        where: {identify_numb_manager : req.params.identify_numb_manager,
                                supporter_numb : email}

                });

                res.locals.question_data = question_data;
                res.locals.answer_data = answer_data;

                res.render("applied_member", {
                        crew_info: question_data,
                        application : answer_data

                });
        }catch(err) {
                res.status(500).send({
                        message: err.message
                });
        }
};