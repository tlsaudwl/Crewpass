module.exports=(sequelize, Sequelize)=>{
    const CrewRecruit=sequelize.define("crewrecruit_detail",{
        recruit_numb:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        title:{
            type:Sequelize.STRING(40)
        },
        detail_info:{
            type:Sequelize.TEXT
        },
        recruit_end:{
            type:Sequelize.DATE
        },
        identify_numb_manager:{ //외래키로 수정할 것
            type:Sequelize.INTEGER
        }
    },{ //기본코드
        sequelize,
        modelName:'crewrecruit_detail', //DB 속 테이블명과 동일할 것
        freezeTableName:true, //DB에 테이블을 생성할 때, 위 modelName 뒤에 s를 붙여 테이블 생성하는 것을 방지
        timestamps:false //createdAt, updateAt 속성이 생성됨을 방지
    });
    return CrewRecruit;
};