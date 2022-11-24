module.exports=(sequelize, Sequelize)=>{
    const Crew=sequelize.define("crew_info",{
        identify_numb_manager:{
            type:Sequelize.INTEGER,
            primaryKey:true
        },
        crew_name:{
            type:Sequelize.STRING(20)
        },
        identify_numb_member:{
            type:Sequelize.INTEGER
        },
        application_question_1:{
            type:Sequelize.TEXT
        },
        application_question_2:{
            type:Sequelize.TEXT
        },
        application_question_3:{
            type:Sequelize.TEXT
        },
        application_question_4:{
            type:Sequelize.TEXT
        },
        application_question_5:{
            type:Sequelize.TEXT
        },
        region:{
            type:Sequelize.STRING(20)
        },
        field:{
            type:Sequelize.STRING(20)
        },
        like_numb:{
            type:Sequelize.INTEGER
        }
    },{ //기본코드
        sequelize,
        modelName:'crew_info', //DB 속 테이블명과 동일할 것
        freezeTableName:true, //DB에 테이블을 생성할 때, 위 modelName 뒤에 s를 붙여 테이블 생성하는 것을 방지
        timestamps:false //createdAt, updateAt 속성이 생성됨을 방지
    });
    return Crew;
};