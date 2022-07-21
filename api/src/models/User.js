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
            get() {
                const value = this.getDataValue('username');
                return value ? value.toLowerCase() : null;
            }
        },
        password: {
            type: DataTypes.TEXT,
            unique: true,
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