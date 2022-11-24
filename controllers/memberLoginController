const db = require("../models/index"),
    passport = require("passport"),
    Member = db.memberinfo;

exports.loginpage = (req,res) => {
    res.render("crewpass_login");
};

exports.authenticate=async(req,res)=>{
    try{
        email=req.body.email;
        password=req.body.password;
        let member=await Member.findOne({where:{email: req.body.email}});
        if(member!=null){ //DB에 email이 저장되어 있는 경우
            if(member.password==password){ //비밀번호까지 일치하는 경우: 홈화면으로 수정할 것
                return res.redirect("/myPage/"+email);
            }else{ //비밀번호가 일치하지 않는 경우
                return res.redirect("/login");
            }
        }else{ //DB에 email이 없는 경우: 회원가입 창으로 이동
            return res.redirect("/memberSubmit");
        }
    }catch(err){
        res.status(500).send({
            message:err.message
        });
    }
};


