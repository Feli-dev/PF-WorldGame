const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type:DataTypes.TEXT,
            allowNull: false,
        },
        // timePlaying: {
        //     type:DataTypes.DECIMAL,
        // },
        // timePerTry: {
        //     type:DataTypes.DECIMAL,
        // },
        // attemps: {
        //     type:DataTypes.ARRAY,
        // },
    },{
        timestamps: false,
     });
};