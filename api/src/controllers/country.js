const axios = require("axios");
const { Country } = require("../db");

async function getCountries() {
  let apiCountries = await axios.get("https://restcountries.com/v3/all");
  // console.log(apiCountries.data[0])
  let formatedCountries = apiCountries.data.map((country) => {
    return {
      name: country.translations.spa.common,
      continent: country.continents[0],
      population: country.population,
      latitud: country.latlng[0],
      longitud: country.latlng[1],
      googleMap: country.maps.googleMaps,
      area: country.area,
      flagSvg: country.flags[0],
    };
  });

  // await Country.bulkCreate(formatedCountries)
  formatedCountries.forEach((country) => {
    Country.findOrCreate({
      where: {
        name: country.name,
        continent: country.continent,
        population: country.population,
        latitud: country.latitud,
        longitud: country.longitud,
        googleMap: country.googleMap,
        area: country.area,
        flagSvg: country.flagSvg,
      },
    });
  });

  console.log("listo");
}

module.exports = {
  getCountries,
};
