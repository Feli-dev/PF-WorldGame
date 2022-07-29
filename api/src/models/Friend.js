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
            validate:{
                len: [3,20]
            },
            get() {
                return this.getDataValue('username') ? this.getDataValue('username').toLowerCase() : "";
            }
        },
        state: {
            type: DataTypes.ENUM,
            values: ['Enviado', 'Recibido', 'Aceptado'],
            defaultValue: 'Aceptado',
            allowNull: false
        }
    },{
        timestamps: false,
    });
}