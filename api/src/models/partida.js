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
        },
        winned: {
            type: DataTypes.BOOLEAN,
        },
        time: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        attempts: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },{
        timestamps: false,
     });
};