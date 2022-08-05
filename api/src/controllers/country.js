const axios = require("axios");
const { Country } = require("../db");

async function getCountries() {
  try {
    const full = await Country.findAll().then(result => result).catch(()=>[]);
    await axios.get("https://restcountries.com/v3/all")
    .then(result => {
      if(result.data.length){
        const country = result.data.map((country) => {
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
        full.length ===  0 && Country.bulkCreate(country)
      }
    })
    .catch(error => {
      console.log("country",error)
    });
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getCountries,
};