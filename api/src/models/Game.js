const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('game', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        countrie: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        winned: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        time: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        attempts: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        points: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
            validate:{
                min:0,
                max:5
            },
            allowNull: false
        },
    },{
        timestamps: false,
     });
};