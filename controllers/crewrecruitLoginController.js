const db=require("../models/index"),
    Crew=db.crew_info;

exports.showcrewLogin=(req,res)=>{
    res.render("crewrecruitLogin");

};

exports.authenticate=async(req,res)=>{ //로그인하는 기능
    try{
        identify_numb_manager= req.body.identify_numb_manager;
        let crew=await Crew.findByPk(identify_numb_manager);
        if(crew.identify_numb_manager==req.body.identify_numb_manager){
            return res.redirect("/crewrecruitList/"+identify_numb_manager); //로그인 성공 후, 이동하는 페이지(동아리 모집글 등록창)
        }else{
            return res.redirect("/crewrecruitLogin");
        }
    }catch(err){ //DB에 해당 번호가 없는 경우
        res.status(500).send({
            message:err.message
        });
    }
}