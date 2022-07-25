const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            get() {
                const value = this.getDataValue('name');
                return value ? value.toUpperCase() : null;
            }
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate:{
                min:3,
                max:20
            },
            get() {
                const value = this.getDataValue('username');
                return value ? value.toLowerCase() : null;
            }
        },
        password: {
            type: DataTypes.TEXT,
            //unique: true,
            allowNull: false,
            validate:{
                min:4,
                max:50
            },
        },
        email: {
            type: DataTypes.STRING,
            //unique: true,
            allowNull: false,
            validate:{
                max:80,
            },
        },
        points: {
            type:DataTypes.FLOAT,
            defaultValue: 0,
                validate:{
                    min:0,
                    max:5,
                },
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        authorization: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },{
        timestamps: false,
    });
};