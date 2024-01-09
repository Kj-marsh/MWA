module.exports = (sequelize, Sequelize) => {
    const Team = sequelize.define("team",
    {
        team_id:{
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        team_name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        }
    },
    
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "teams"
    });

    return Team;
}