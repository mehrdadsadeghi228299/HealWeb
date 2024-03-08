const provinceController = require('./province.controller');
const {Authorization, CheckRole} = require('../../common//guard/authorization.guard');
const { validatorProvince } = require('./province.validtor');

const router = require('express').Router();

router.post("/create-province",Authorization,validatorProvince,provinceController.createProvince);
router.put("/add-city",Authorization,provinceController.addCity);
router.get("/find-province/:name",Authorization,provinceController.findMyProvince);
router.get("/show-province/:name" ,Authorization,provinceController.showProvince);
router.get("/get-city/:name" ,Authorization,CheckRole('admin'),provinceController.getcityWithParamter);
router.get("/get-city/" ,Authorization,CheckRole('admin'),provinceController.getcityWithParamterAsuserId);
router.get("/province" ,Authorization,provinceController.CalcauteProvinceLevel);
router.get("/province-all" ,Authorization,provinceController.getEveryThings);

module.exports = {
    ProvinceRouter : router
};