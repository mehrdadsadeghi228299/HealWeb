const provinceController = require('./province.controller');
const Authorization = require('../../common//guard/authorization.guard');
const { validatorProvince } = require('./province.validtor');

const router = require('express').Router();

router.post("/create-province",Authorization,validatorProvince,provinceController.createProvince);
router.put("/add-city",Authorization,provinceController.addCity);
router.get("/find-province/:name",Authorization,provinceController.findMyProvince);
router.get("/show-province/:name" ,Authorization,provinceController.showProvince);
router.get("/province" ,Authorization,provinceController.CalcauteProvinceLevel);

module.exports = {
    ProvinceRouter : router
};