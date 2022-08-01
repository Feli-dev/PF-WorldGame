const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('payment', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        amount: {
            type: DataTypes.INTEGER,
            defaultValue: 5,
        },
        username:{
            type: DataTypes.STRING,
            allowNull: true

        }
        
    },{
        timestamps: true,
     });
};