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
        avatar: {
            type: DataTypes.TEXT,
            defaultValue: "https://countryle.com/assets/images/welcome-page/welcome-loading-image-5.png"
        }
    },{
        timestamps: false,
    });
}