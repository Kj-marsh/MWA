
module.exports = (sequelize, Sequelize, team) => {
    const Player = sequelize.define("player",
    {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        playerName: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
        shirtNum: {
            type: Sequelize.INTEGER
        },
        description: {
            type: Sequelize.STRING
        },
        team_id:{
            type: Sequelize.INTEGER
        }
        
        
    },
    
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "player"
    });

    return Player;
}