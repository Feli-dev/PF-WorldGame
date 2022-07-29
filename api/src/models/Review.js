const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('review', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },{
        timestamps: true,
    });
};