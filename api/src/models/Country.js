const { DataTypes } = require(`sequelize`);

module.exports = (sequelize) => {
    sequelize.define("country", {
        name: {
            type: DataTypes.STRING(),
            allowNull: false,
        },
        continent: {
            type: DataTypes.STRING(),
            allowNull: false,
        },
        population: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        latitud: {
            type: DataTypes.INTEGER,
        },
        longitud: {
            type: DataTypes.INTEGER,
        },
        googleMap: {
            type: DataTypes.STRING,
        },
        area: {
            type: DataTypes.INTEGER,
        },
        flagSvg: {
            type: DataTypes.STRING
        },
        // flagEmoji: {
        //     type: DataTypes.STRING
        // }
    }, {
        timestamps: false,
      })
}