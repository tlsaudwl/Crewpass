const db = require("../models/index"),
        Memberinfo = db.memberinfo,
        Op = db.Sequelize.Op;


exports.showMyPage = async (req, res) => {
        try {
                email=req.params.email;
                let data = await Memberinfo.findOne({
                    where: { email : req.params.email}
                });
                res.locals.data = data;
                res.render("myPage",{memberinfo:data});
        }catch(err) {
                res.status(500).send({
                        message: err.message
                });
        }

};