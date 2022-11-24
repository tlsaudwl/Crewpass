const db=require("../models/index"),
    CrewRecruit=db.crewrecruit_detail;

exports.showcrewWrite=(req,res)=>{
    res.render("crewWrite", {identify_numb_manager: req.params.identify_numb_manager}); //뒤에 작성해야 함.
};

//crewSubmit.ejs에서 동아리 등록 버튼을 눌렀을 때, 입력 받은 정보들을 저장
exports.saveCrewRecruit=async(req,res)=>{
    try{
        identify_numb_manager = req.params.identify_numb_manager;
        console.log(identify_numb_manager);
        await CrewRecruit.create({
            //memberSubmit.ejs에서 name으로 설정한 값
            //recruit_numb : 자동 증가하도록 설정했기 때문에 선언할 필요X
            identify_numb_manager: req.params.identify_numb_manager,
            title:req.body.title,
            detail_info:req.body.detail_info,
            recruit_end:req.body.recruit_end
        });
        res.redirect("../index"); //동아리 등록 버튼을 클릭하여 저장 후 뜨는 사이트: views 폴더 안에 있는 ejs 파일이어야만 연동된다.
    }catch(err){
        res.status(500).send({
            message:err.message
        });
    }
};