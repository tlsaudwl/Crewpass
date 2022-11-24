const db=require("../models/index"),
    Crew=db.crew_info;

exports.showcrewSubmit=(req,res)=>{
    res.render("crewSubmit");
};

//crewSubmit.ejs에서 동아리 등록 버튼을 눌렀을 때, 입력 받은 정보들을 저장
exports.saveCrew=async(req,res)=>{
    try{
        var identify_numb_manager = Math.random()*99999;
        var identify_numb_member=Math.random()*99999;
        await Crew.create({
            //crewSubmit.ejs에서 name으로 설정한 값
            identify_numb_manager: identify_numb_manager,
            identify_numb_member: identify_numb_member,
            like_numb: 0,
            crew_name:req.body.crew_name,
            field:req.body.field,
            region:req.body.region,
            application_question_1:req.body.application_question_1,
            application_question_2:req.body.application_question_2,
            application_question_3:req.body.application_question_3,
            application_question_4:req.body.application_question_4,
            application_question_5:req.body.application_question_5
        });
        data = await Crew.findOne({
            where: { crew_name : req.body.crew_name}
        })
        res.locals.data = data
        res.render("show_identifyNumb", {crew_info : data}); //동아리 등록 버튼을 클릭하여 저장 후 뜨>는 사이트: views 폴더 안에 있는 ejs 파일이어야만 연동된다.
    }catch(err){
        res.status(500).send({
            message:err.message
        });
    }
};