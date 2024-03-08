const provinceController = require('./province.controller');
const {Authorization, CheckRole} = require('../../common//guard/authorization.guard');
const { validatorProvince } = require('./province.validtor');

const router = require('express').Router();

router.post("/create-province",Authorization,validatorProvince,CheckRole('admin','updater'),provinceController.createProvince);
router.put("/add-city",Authorization,CheckRole('admin','updater'),provinceController.addCity);
router.get("/find-province/:name",Authorization,CheckRole('admin','normal'),provinceController.findMyProvince);
router.get("/show-province/:name" ,Authorization,CheckRole('admin','normal'),provinceController.showProvince);
router.get("/get-city/:name" ,Authorization,CheckRole('admin','updater'),provinceController.getcityWithParamter);
router.get("/get-city/" ,Authorization,CheckRole('admin','normal','updater'),provinceController.getcityWithParamterAsuserId);
router.get("/province" ,Authorization,CheckRole('admin','normal','updater'),provinceController.CalcauteProvinceLevel);
router.get("/province-all" ,Authorization,CheckRole('admin','normal','updater'),provinceController.getEveryThings);
router.get("/province-all-paramters" ,Authorization,CheckRole('admin','normal','updater'),provinceController.getAllparamter);

module.exports = {
    ProvinceRouter : router
};