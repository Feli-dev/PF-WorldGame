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
            allowNull: true
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate:{
                len: [3,20]
            },
            get() {
                return this.getDataValue('username') ? this.getDataValue('username').toLowerCase() : "";
            }
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate:{
                len: [10,80],
                isEmail: true
            },
        },
        points: {
            type:DataTypes.FLOAT,
            defaultValue: 0,
            validate:{
                min:0,
                max:5,
                isNumeric: true
            },
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        premium: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        connect: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        state: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        authorization: {
            type: DataTypes.ENUM,
            values: ['Pro-Admin', 'Community-Admin', 'Enterprise-Admin', 'User'],
            defaultValue: 'User',
            allowNull: false
        },
        avatar: {
            type: DataTypes.TEXT,
            defaultValue: "https://res.cloudinary.com/dunhnh8mv/image/upload/v1660090956/sgui6vs7tehvrggagkd5.png"
        }
    },{
        timestamps: true,
    });
};