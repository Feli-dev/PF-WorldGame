const axios = require('axios');
const {Country} = require('../db')

// const  apiKey = '4ae2636d8dfbdc3044bede63951a019b';
// const a= `http://api.openweathermap.org/data/2.5/weather?lat=10&lon=10&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
let example = {
    name: {
      common: 'Burundi',
      official: 'Republic of Burundi',
      nativeName: { fra: [Object], run: [Object] }
    },
    tld: [ '.bi' ],
    cca2: 'BI',
    ccn3: '108',
    cca3: 'BDI',
    cioc: 'BDI',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: { BIF: { name: 'Burundian franc', symbol: 'Fr' } },
    idd: { root: '+2', suffixes: [ '57' ] },
    capital: [ 'Gitega' ],
    altSpellings: [
      'BI',
      'Republic of Burundi',
      "Republika y'Uburundi",
      'République du Burundi'
    ],
    region: 'Africa',
    subregion: 'Eastern Africa',
    languages: { fra: 'French', run: 'Kirundi' },
    
    latlng: [ -3.5, 30 ],
    
    area: 27834,
    
    flag: '🇧🇮'  ,
    maps: {
      googleMaps: 'https://goo.gl/maps/RXPWoRrB9tfrJpUG7',
      openStreetMaps: 'https://www.openstreetmap.org/relation/195269'
    },
    population: 11890781,
    gini: { '2013': 38.6 },
    fifa: 'BDI',
    car: { signs: [ 'RU' ], side: 'right' },
    timezones: [ 'UTC+02:00' ],
    continents: [ 'Africa' ],
    flags: [ 'https://flagcdn.com/bi.svg', 'https://flagcdn.com/w320/bi.png' ]
  }

async function getCountries (){
    let apiCountries = await axios.get('https://restcountries.com/v3/all');
// console.log(apiCountries.data[0])
    let formatedCountries = apiCountries.data.map(country => {
        return {
            name: country.name.common,
            continent: country.continents[0],
            population: country.population,
            latitud: country.latlng[0],
            longitud: country.latlng[1],
            googleMap: country.maps.googleMaps,
            area: country.area
        }
    } )
    await Country.bulkCreate(formatedCountries)
    
    // console.log(formatedCountries)
    // formatedCountries.forEach(country => {
    //     Country.findOrCreate({where: {
    //         name: country.name,
    //         continent: country.continent,
    //         population: country.population,
    //         latitud: country.latitud,
    //         longitud: country.longitud,
    //         googleMap: country.googleMap,
    //         area: country.area
    //     }})
    // })
    console.log('listo')
}

module.exports = {
    getCountries
} 