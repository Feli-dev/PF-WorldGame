const {Country} = require('../db')
const { Router } = require('express');

const router = Router();

router.get('/', async (req, res)=>{
    let allCountries = await Country.findAll() 
    res.json(allCountries)
})

module.exports = router;