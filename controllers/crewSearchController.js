const db = require("../models/index");//다 가져와서
Crew = db.crew_info;//db등록
Op = db.Sequelize.Op;

exports.searchingCrew = async (req,res,next) {
    const search = req.query.crew_name;

    search_result = await Crew.findAll({
        where: {
            crew_name : {
                [Op.like]: `%${search}%`
            }
        }
    });

    if (search_result.length != 0) {
        try {
            res.send({
                message: "Search results",
                status: 'success',
                data: {
                    search,
                    search_result
                }
            });
        }catch (err) {
            res.status(500).send({
                message: err.message
            })
        }
    }
    else {
        res.send({
            message: "No results or fail",
            status: 'null'
        });
    }
}




