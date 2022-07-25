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
            get() {
                const value = this.getDataValue('username');
                return value ? value.toLowerCase() : null;
            }
        },
        password: {
            type: DataTypes.TEXT,
            //unique: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            //unique: true,
            allowNull: false,
        },
        points: {
            type:DataTypes.FLOAT,
            defaultValue: 0,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        premium: {
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
            defaultValue: 'Pro-Admin'
        }
    },{
        timestamps: false,
    });
};