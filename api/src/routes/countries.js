const { Router } = require('express');
const { Country } = require("../db");

const router = Router();
const path = "api/src/routes/countries.js"

router.get("/", async (req, res) =>{

    try{
        const countries = await Country.findAll()
        .catch(error => {
            console.log(`Error: ${error}\nRuta: ${path}\nMetodo: GET`)
            return res.status(400).json({ Error: error }); 
        })
        
        const { name } = req.body
        if(name){
            let nameLowCase = name.toLowerCase()

            let specificCountry = countries.filter( el => {return el.name.toLowerCase() === nameLowCase})
            if(specificCountry[0]) return res.status(200).json(specificCountry[0])
            else return res.status(404).json({Error: "No se encontró un pais con ese nombre."})
        }
        
        res.status(200).json(countries)
    }
    catch(error){ 
        console.log(`Error: ${error}\nRuta: ${path}\nMetodo: GET`)
        return res.status(400).json({ Error: error });
        }
})



module.exports = router;