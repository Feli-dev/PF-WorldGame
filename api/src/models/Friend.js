const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Friend', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        FriendId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            get() {
                return this.getDataValue('username') ? this.getDataValue('username').toLowerCase() : "";
            }
        },
        connect: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        avatar: {
            type: DataTypes.TEXT,
            defaultValue: "https://res.cloudinary.com/dunhnh8mv/image/upload/v1659972908/nnm2jznivdalyzycj3rb.png"
        }
    },{
        timestamps: false,
    });
}