module.exports = (sequelize, Sequelize) => {
    const application = sequelize.define("application", {
            supporter_numb: {
                    type: Sequelize.INTEGER,
                    primaryKey: true
            },
            identify_numb_manager: {
                    type: Sequelize.INTEGER,
            },
            email: {
                    type: Sequelize.STRING,
                    allowNull: false
            },
            application_ans1: {
                    type: Sequelize.TEXT
            },
            application_ans2: {
                    type: Sequelize.TEXT
            },
            application_ans3: {
                    type: Sequelize.TEXT
            },
            application_ans4: {
                    type: Sequelize.TEXT
            },

            application_ans5: {
                    type: Sequelize.TEXT
            },
            pass_TF: {
                    type: Sequelize.STRING(3)
            }
    },
             {
            sequelize,
            modelName:'application', //DB 속 테이블명과 동일할 것
            freezeTableName:true, //DB에 테이블을 생성할 때, 위 modelName 뒤에 s를 붙여 테이블 생성하는 것>을 방지
            timestamps:false //createdAt, updateAt 속성이 생성됨을 방지
            });
    return application;

}