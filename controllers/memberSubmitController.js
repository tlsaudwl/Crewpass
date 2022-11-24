const db=require("../models/index"),
    Member=db.memberinfo;

exports.showmemberSubmit=(req,res)=>{
    res.render("memberSubmit");
};

//memberSubmit.ejs에서 회원가입 버튼을 눌렀을 때, 입력 받은 정보들을 저장
exports.saveMember=async(req,res)=>{
    try{
        await Member.create({
            //memberSubmit.ejs에서 name으로 설정한 값
            email:req.body.email,
            password:req.body.password,
            name:req.body.name,
            birth:req.body.birth,
            phone_numb:req.body.phone_numb
        });
        res.redirect("../index"); //회원가입 버튼을 클릭하여 저장 후 뜨는 사이트: views 폴더 안에 있는 ejs 파일이어야만 연동된다.
    }catch(err){
        res.status(500).send({
            message:err.message
        });
    }
};