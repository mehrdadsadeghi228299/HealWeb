const { Authorization, CheckRole } = require('../../common/guard/authorization.guard');
const cityController = require('./city.controller');
const { validatorCity } = require('./city.validator');

const router = require('express').Router();

router.post("/create-city",validatorCity,Authorization,CheckRole('admin','creator'),cityController.createCity);
router.get("/find-city/:city",Authorization,CheckRole('admin','updater'),cityController.findMyCityANDShow);
router.put("/add-paramter",Authorization,CheckRole('admin','updater','creator'),cityController.Addparamters);
router.get("/show-paramter",Authorization,CheckRole('admin','updater'),cityController.showParameters);


module.exports = {
    
    CityRouter:router
};