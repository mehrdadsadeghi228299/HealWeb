const cityController = require('./city.controller');
const { validatorCity } = require('./city.validator');

const router = require('express').Router();

router.post("/create-city",validatorCity,cityController.createCity);
router.get("/find-city/:city",cityController.findMyCityANDShow);
router.put("/add-paramter",cityController.Addparamters);
router.get("/show-paramter",cityController.showParameters);


module.exports = {
    
    CityRouter:router
};