const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
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
        country: {
            type:DataTypes.TEXT,
            allowNull: false,
        },
        points: {
            type:DataTypes.FLOAT,
            defaultValue: "0",
        },
        isActive: {
            type:DataTypes.BOOLEAN,
            allowNull: false,
        },
    },{
        timestamps: false,
     });
};